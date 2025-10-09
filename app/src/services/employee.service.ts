import { GetEmployeesQueryDto } from "@src/types/dtos/employee.dto";
import EmployeeRepository from "@src/repositories/employee.repository";
import { APIErrorResponse } from '@src/core/response.core';

export default class EmployeeService {
    static async getEmployees(query: GetEmployeesQueryDto) {
        const page = query.page ? parseInt(query.page.toString()) : 1;
        const limit = query.limit ? parseInt(query.limit.toString()) : 10;

        // Validate pagination parameters
        if (page <= 0) {
            throw new APIErrorResponse('Page number must be greater than 0', 400);
        }

        if ((limit <= 0 || limit > 100) && limit !== -1) {
            throw new APIErrorResponse('Limit must be between 1 and 100', 400);
        }

        const { email, code } = query;
        const employees = await EmployeeRepository.getEmployees(page, limit, email, code);
        const total = await EmployeeRepository.countEmployees(email, code);
        const totalPages = Math.ceil(total / limit);

        return {
            employees,
            pagination: {
                page,
                limit,
                total,
                totalPages
            }
        };
    }

    static async searchEmployeesByName(query: { page?: string | number; limit?: string | number; name: string; }) {
        const page = query.page ? parseInt(query.page.toString()) : 1;
        const limit = query.limit ? parseInt(query.limit.toString()) : 10;
        const name = query.name;
        
        // Validate pagination parameters
        if (page <= 0) {
            throw new APIErrorResponse('Page number must be greater than 0', 400);
        }

        if ((limit <= 0 || limit > 100) && limit !== -1) {
            throw new APIErrorResponse('Limit must be between 1 and 100', 400);
        }

        if (!name || name.trim() === '') {
            throw new APIErrorResponse('Name parameter is required for searching', 400);
        }

        const employees = await EmployeeRepository.searchEmployeesByName(page, limit, name);
        const total = await EmployeeRepository.countEmployeesByName(name);
        const totalPages = Math.ceil(total / limit);

        return {
            employees,
            pagination: {
                page,
                limit,
                total,
                totalPages
            }
        };
    }
}