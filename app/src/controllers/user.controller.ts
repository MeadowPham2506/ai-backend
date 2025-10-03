import { Request, Response } from 'express';
import UserService from '../services/user.service';
import { ApiResponseHandler, APIErrorResponse } from '@src/core/response.core';
import asyncWrapper from '@src/utils/async-wrapper.util';
import { 
    GetUsersQueryDto, 
    CreateUserDto, 
    UpdateUserDto,
    UserResponseDto,
    SuccessResponse,
    PaginatedResponse,
    ErrorResponse
} from '../types/dtos';

export default class UserController {
    static getUsers = asyncWrapper(async (req: Request, res: Response): Promise<Response<PaginatedResponse<UserResponseDto>>> => {
        const query: GetUsersQueryDto = req.query;
        const result = await UserService.getUsers(query);
        
        return ApiResponseHandler.sendPaginated(
            res,
            result.users,
            result.pagination,
            'Users retrieved successfully'
        );
    });

    static getUserById = asyncWrapper(async (req: Request, res: Response): Promise<Response<SuccessResponse<UserResponseDto> | ErrorResponse>> => {
        const { id } = req.params;
        const user = await UserService.getUserById(parseInt(id));
        
        if (!user) {
            throw new APIErrorResponse('User not found', 404);
        }

        return ApiResponseHandler.sendSuccess(
            res,
            user,
            'User retrieved successfully'
        );
    });

    static createUser = asyncWrapper(async (req: Request, res: Response): Promise<Response<SuccessResponse<UserResponseDto> | ErrorResponse>> => {
        const userData: CreateUserDto = req.body;
        const user = await UserService.createUser(userData);
        
        return ApiResponseHandler.sendSuccess(
            res,
            user,
            'User created successfully',
            201
        );
    });

    static updateUser = asyncWrapper(async (req: Request, res: Response): Promise<Response<SuccessResponse<UserResponseDto> | ErrorResponse>> => {
        const { id } = req.params;
        const updateData: UpdateUserDto = req.body;
        const user = await UserService.updateUser(parseInt(id), updateData);
        
        if (!user) {
            throw new APIErrorResponse('User not found', 404);
        }

        return ApiResponseHandler.sendSuccess(
            res,
            user,
            'User updated successfully'
        );
    });

    static deleteUser = asyncWrapper(async (req: Request, res: Response): Promise<Response<SuccessResponse<null> | ErrorResponse>> => {
        const { id } = req.params;
        const deleted = await UserService.deleteUser(parseInt(id));
        
        if (!deleted) {
            throw new APIErrorResponse('User not found', 404);
        }

        return ApiResponseHandler.sendSuccess(
            res,
            null,
            'User deleted successfully'
        );
    });
}
