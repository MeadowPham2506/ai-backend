import EmployeeRepository from "@src/repositories/employee.repository";
import MeetingRepository from "@src/repositories/meeting.repository";
import { CreateMeetingDto, GetMeetingPlanDto, GetMeetingRoomsDto } from "@src/types/dtos/meeting.dto";

export default class MeetingService {
    static async getMeetingRooms(query: GetMeetingRoomsDto) {
        const page = query.page ? parseInt(query.page.toString()) : 1;
        const limit = query.limit ? parseInt(query.limit.toString()) : 10;
        const is_active = query.is_active ? 
            (typeof query.is_active === 'string' ? query.is_active === 'true' : query.is_active) : 
            undefined;
        const capacity_min = query.capacity_min ? parseInt(query.capacity_min.toString()) : 0;

        // Validate pagination parameters
        if (page <= 0) {
            throw new Error('Page number must be greater than 0');
        }

        if ((limit <= 0 || limit > 100) && limit !== -1) {
            throw new Error('Limit must be between 1 and 100');
        }

        // Fetch meeting rooms from repository (to be implemented)
        const meetingRooms = await MeetingRepository.getMeetingRooms(page, limit, is_active, capacity_min);
        const total = await MeetingRepository.countMeetingRooms(is_active, capacity_min);
        const totalPages = Math.ceil(total / limit);

        return {
            meeting_rooms: meetingRooms,
            pagination: {
                page,
                limit,
                total,
                totalPages
            }
        };
    }

    static async getMeetingPlan(query: GetMeetingPlanDto) {
        const page = query.page ? parseInt(query.page.toString()) : 1;
        const limit = query.limit ? parseInt(query.limit.toString()) : 10;
        const room_name = query.room_name ? query.room_name.toString() : undefined;
        const meeting_date = query.meeting_date ? query.meeting_date.toString() : undefined;

        // Validate pagination parameters
        if (page <= 0) {
            throw new Error('Page number must be greater than 0');
        }

        if ((limit <= 0 || limit > 100) && limit !== -1) {
            throw new Error('Limit must be between 1 and 100');
        }
        
        if (!room_name || !meeting_date) {
            throw new Error('room_name and meeting_date are required');
        }

        const convertedDate = new Date(meeting_date.split('/').reverse().join('-'));
        if (isNaN(convertedDate.getTime())) {
            throw new Error('Invalid date format. Expected DD/MM/YYYY');
        }

        // Fetch meeting plans from repository (to be implemented)
        const meetingPlans = await MeetingRepository.getMeetingPlans(page, limit, room_name, convertedDate);
        const total = await MeetingRepository.countMeetingPlans(room_name, convertedDate);
        const totalPages = Math.ceil(total / limit);
        
        return {
            meeting_plans: meetingPlans,
            pagination: {
                page,
                limit,
                total,
                totalPages
            }
        };
    }

    static async createMeeting({
        employee_code,
        meeting_room_id,
        meeting_date,
        start_time,
        end_time,
        purpose
    }: CreateMeetingDto) {
        const convertedDate = meeting_date ? new Date(meeting_date.split('/').reverse().join('-')) : null;
        if (!convertedDate || isNaN(convertedDate.getTime())) {
            throw new Error('Invalid or missing meeting_date. Expected DD/MM/YYYY');
        }

        const startDateTime = start_time ? new Date(`${convertedDate.toISOString().split('T')[0]}T${start_time}:00`) : null;
        const endDateTime = end_time ? new Date(`${convertedDate.toISOString().split('T')[0]}T${end_time}:00`) : null;

        const convertedMeetingRoomId = meeting_room_id ? parseInt(meeting_room_id.toString()) : 0;

        if (!startDateTime || isNaN(startDateTime.getTime())) {
            throw new Error('Invalid or missing start_time. Expected HH:mm');
        }

        if (!endDateTime || isNaN(endDateTime.getTime())) {
            throw new Error('Invalid or missing end_time. Expected HH:mm');
        }

        if (startDateTime >= endDateTime) {
            throw new Error('start_time must be before end_time');
        }

        if (!employee_code || !convertedMeetingRoomId) {
            throw new Error('employee_code and meeting_room_id are required');
        }

        const isAvailable = await MeetingRepository.isRoomAvailable(
            convertedMeetingRoomId,
            convertedDate,
            startDateTime,
            endDateTime
        );
        
        if (!isAvailable) {
            throw new Error('The meeting room is not available for the selected time slot');
        }

        const employeeExists = await EmployeeRepository.getEmployeeByCode(employee_code);
        if (!employeeExists) {
            throw new Error('Employee with the given code does not exist');
        }

        const meetingPlan = await MeetingRepository.createMeetingPlan(
            employee_code,
            convertedMeetingRoomId,
            convertedDate,
            startDateTime,
            endDateTime,
            purpose || ''
        );

        return meetingPlan;
    }
}