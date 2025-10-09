import { Request, Response } from 'express';
import asyncWrapper from '@src/utils/async-wrapper.util';
import EmployeeService from '@src/services/employee.service';
import {
    GetEmployeesQueryDto,
    SearchEmployeesByNameDto,
    EmployeeListResponseDto
} from '@src/types/dtos/employee.dto';
import { ApiResponseHandler } from '@src/core/response.core';
import { PaginatedResponse, PaginationDto } from '@src/types/dtos';

export default class EmployeeController {
    static getEmployees = asyncWrapper(async (req: Request, res: Response): Promise<Response<PaginatedResponse<EmployeeListResponseDto>>> => {
        const query: GetEmployeesQueryDto = req.query;
        const result = await EmployeeService.getEmployees(query);

        return ApiResponseHandler.sendPaginated(
            res, result.employees, result.pagination, 'Employees retrieved successfully'
        )
    })

    static searchEmployeesByName = asyncWrapper(async (req: Request, res: Response): Promise<Response<PaginatedResponse<EmployeeListResponseDto>>> => {
        const query: SearchEmployeesByNameDto = req.body;
        const pagination: PaginationDto = req.query;
        const result = await EmployeeService.searchEmployeesByName({
            ...query,
            ...pagination
        });

        return ApiResponseHandler.sendPaginated(
            res, result.employees, result.pagination, 'Employees retrieved successfully'
        )
    })
}