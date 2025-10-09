export interface GetEmployeesQueryDto {
    page?: string | number;
    limit?: string | number;
    email?: string;
    code?: string;
}

export interface SearchEmployeesByNameDto {
    name: string;
}

export interface EmployeeResponseDto {
    employee_code: string;
    first_name: string;
    last_name: string;
}

export interface EmployeeListResponseDto {
    products: EmployeeResponseDto[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}