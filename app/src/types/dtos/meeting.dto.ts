export interface GetMeetingRoomsDto {
    page?: string | number;
    limit?: string | number;
    is_active?: string | boolean;
    capacity_min?: string | number;
}

export interface GetMeetingPlanDto {
    page?: string | number;
    limit?: string | number;
    room_name?: string;
    meeting_date?: string; // DD/MM/YYYY
}

export interface MeetingRoomResponseDto {

}

export interface MeetingPlanResponseDto {
    id: number;
    employee_code: string;
    meeting_room_id: number;
    meeting_date: Date;
    start_time: Date;
    end_time: Date;
    purpose: string;
}

export interface MeetingPlanListResponseDto {
    meeting_plans: MeetingPlanResponseDto[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

export interface MeetingRoomListResponseDto {
    meeting_rooms: MeetingRoomResponseDto[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

export interface CreateMeetingDto {
    employee_code?: string;
    meeting_room_id?: number;
    meeting_date?: string; // DD/MM/YYYY
    start_time?: string; // HH:mm
    end_time?: string; // HH:mm
    purpose?: string;
}

export interface CreateMeetingResponseDto {
    meeting_plan_id: number;
    room_name: string;
    employee_name: string;
    employee_job_title: string;
    employee_department: string;
    meeting_date: string; // DD/MM/YYYY
    start_time: string; // HH:mm
    end_time: string; // HH:mm
    purpose: string;
}