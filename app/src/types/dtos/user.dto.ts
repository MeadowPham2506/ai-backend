import { PaginationDto } from './index';

// Request DTOs
export interface CreateUserDto {
    name: string;
}

export interface UpdateUserDto {
    name?: string;
}

export interface GetUsersQueryDto extends PaginationDto {
    search?: string;
    sortBy?: 'name' | 'created_at' | 'updated_at';
    sortOrder?: 'asc' | 'desc';
}

// Response DTOs
export interface UserResponseDto {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
    orders?: OrderResponseDto[];
}

// Import OrderResponseDto to avoid circular dependency
interface OrderResponseDto {
    id: number;
    quantity: number;
    purpose?: string;
    created_at: Date;
    updated_at: Date;
    product?: {
        id: number;
        name: string;
        unit: string;
        origin: string;
    };
}