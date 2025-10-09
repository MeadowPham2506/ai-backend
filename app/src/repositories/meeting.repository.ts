import Database from "@src/core/database.core";

const prisma = Database.getClient();

export default class MeetingRepository {
    static async getMeetingRooms(
        page: number = 1,
        limit: number = 10,
        is_active?: boolean,
        capacity_min?: number
    ) {
        const offset = limit === -1 ? 0 : (page - 1) * limit;

        const whereClause: any = {};
        
        if (typeof is_active === 'boolean') {
            whereClause.is_active = is_active;
        }

        if (capacity_min) {
            whereClause.capacity = { gte: capacity_min };
        }

        return prisma.meetingRoom.findMany({
            where: whereClause,
            skip: offset,
            take: limit === -1 ? undefined : limit,
            orderBy: { id: 'asc' }
        });
    }

    static async countMeetingRooms(is_active?: boolean, capacity_min?: number): Promise<number> {
        const whereClause: any = {};
        
        if (typeof is_active === 'boolean') {
            whereClause.is_active = is_active;
        }

        if (capacity_min) {
            whereClause.capacity = { gte: capacity_min };
        }

        return prisma.meetingRoom.count({
            where: whereClause
        });
    }

    static async getMeetingPlans(
        page: number = 1,
        limit: number = 10,
        room_name: string,
        meeting_date: Date
    ) {
        const offset = limit === -1 ? 0 : (page - 1) * limit;
        
        const whereClause: any = {};
        
        if (room_name) {
            whereClause.meeting_room = {
                name: {
                    contains: room_name,
                    mode: 'insensitive'
                }
            };
        }
        
        if (meeting_date) {
            whereClause.meeting_date = meeting_date;
        }
        
        const meetingPlans = await prisma.meetingPlan.findMany({
            where: whereClause,
            include: {
                meeting_room: true,
                employee: true
            },
            skip: offset,
            take: limit === -1 ? undefined : limit,
            orderBy: { id: 'asc' }
        });

        return meetingPlans.map(plan => ({
            id: plan.id,
            employee_code: plan.employee_code,
            employee_name: `${plan.employee.last_name} ${plan.employee.first_name}`,
            employee_job_title: plan.employee.job_title,
            employee_department: plan.employee.job_department,
            meeting_room_id: plan.room_id,
            meeting_room_name: plan.meeting_room.name,
            meeting_date: `${plan.meeting_date.getDate().toString().padStart(2, '0')}/${(plan.meeting_date.getMonth() + 1).toString().padStart(2, '0')}/${plan.meeting_date.getFullYear()}`,
            start_time: `${plan.start_time.getHours().toString().padStart(2, '0')}:${plan.start_time.getMinutes().toString().padStart(2, '0')}`,
            end_time: `${plan.end_time.getHours().toString().padStart(2, '0')}:${plan.end_time.getMinutes().toString().padStart(2, '0')}`,
            purpose: plan.purpose
        }))
    }

    static async countMeetingPlans(room_name: string, meeting_date: Date): Promise<number> {
        const whereClause: any = {};
        
        if (room_name) {
            whereClause.meeting_room = {
                name: {
                    contains: room_name,
                    mode: 'insensitive'
                }
            };
        }
        
        if (meeting_date) {
            whereClause.meeting_date = meeting_date;
        }
        
        return prisma.meetingPlan.count({
            where: whereClause
        });
    }

    static async isRoomAvailable(
        meeting_room_id: number,
        meeting_date: Date,
        start_time: Date,
        end_time: Date
    ) {
        const isRoomActive = await prisma.meetingRoom.findUnique({
            where: { id: meeting_room_id, is_active: true }
        })
        if (!isRoomActive) {
            return false;
        }
        const overlappingMeetings = await prisma.meetingPlan.findMany({
            where: {
                room_id: meeting_room_id,
                meeting_date,
                AND: [
                    {
                        start_time: {
                            lt: end_time
                        }
                    },
                    {
                        end_time: {
                            gt: start_time
                        }
                    }
                ]
            }
        });

        return overlappingMeetings.length === 0;
    }

    static async createMeetingPlan(
        employee_code: string,
        meeting_room_id: number,
        meeting_date: Date,
        start_time: Date,
        end_time: Date,
        purpose: string
    ) {
        const createdMeeting = await prisma.meetingPlan.create({
            data: {
                employee_code,
                room_id: meeting_room_id,
                meeting_date,
                start_time,
                end_time,
                purpose
            },
            include: {
                meeting_room: true,
                employee: {
                    select: {
                        employee_code: true,
                        first_name: true,
                        last_name: true,
                        job_title: true,
                        job_department: true
                    }
                }
            }
        });

        return {
            meeting_plan_id: createdMeeting.id,
            room_name: createdMeeting.meeting_room.name,
            employee_name: `${createdMeeting.employee.last_name} ${createdMeeting.employee.first_name}`,
            employee_job_title: createdMeeting.employee.job_title,
            employee_department: createdMeeting.employee.job_department,
            meeting_date: `${createdMeeting.meeting_date.getDate().toString().padStart(2, '0')}/${(createdMeeting.meeting_date.getMonth() + 1).toString().padStart(2, '0')}/${createdMeeting.meeting_date.getFullYear()}`,
            start_time: `${createdMeeting.start_time.getHours().toString().padStart(2, '0')}:${createdMeeting.start_time.getMinutes().toString().padStart(2, '0')}`,
            end_time: `${createdMeeting.end_time.getHours().toString().padStart(2, '0')}:${createdMeeting.end_time.getMinutes().toString().padStart(2, '0')}`,
            purpose: createdMeeting.purpose
        }
    }
}