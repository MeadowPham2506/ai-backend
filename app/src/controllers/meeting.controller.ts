import { Request, Response } from 'express';
import { ApiResponseHandler } from '@src/core/response.core';
import asyncWrapper from '@src/utils/async-wrapper.util';
import {
    CreateMeetingDto,
    CreateMeetingResponseDto,
    GetMeetingPlanDto,
    GetMeetingRoomsDto,
    MeetingPlanListResponseDto,
    MeetingRoomListResponseDto
} from "@src/types/dtos/meeting.dto";
import { PaginatedResponse } from '@src/types/dtos';
import MeetingService from '@src/services/meeting.service';

export default class MeetingController {
    static getMeetingRooms = asyncWrapper(async (req: Request, res: Response): Promise<Response<PaginatedResponse<MeetingRoomListResponseDto>>> => {
        const query: GetMeetingRoomsDto = req.query;
        const result = await MeetingService.getMeetingRooms(query);

        return ApiResponseHandler.sendPaginated(
            res, result.meeting_rooms, result.pagination, 'Meeting rooms retrieved successfully'
        )
    })

    static getMeetingPlan = asyncWrapper(async (req: Request, res: Response): Promise<Response<PaginatedResponse<MeetingPlanListResponseDto>>> => {
        const query: GetMeetingPlanDto = req.query;
        const result = await MeetingService.getMeetingPlan(query);

        return ApiResponseHandler.sendPaginated(
            res, result.meeting_plans, result.pagination, 'Meeting plans retrieved successfully'
        )
    })

    static createMeeting = asyncWrapper(async (req: Request, res: Response): Promise<Response<CreateMeetingResponseDto>> => {
        const body: CreateMeetingDto = req.body;
        const result = await MeetingService.createMeeting(body);
        
        return ApiResponseHandler.sendSuccess(
            res, result, 'Meeting created successfully'
        )
    })
}