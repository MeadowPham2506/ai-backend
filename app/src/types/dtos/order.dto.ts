import { PaginationDto } from './index';

// Request DTOs
export interface CreateOrderDto {
    user_id: number;
    product_id: number;
    quantity: number;
    purpose?: string;
}

export interface UpdateOrderDto {
    user_id?: number;
    product_id?: number;
    quantity?: number;
    purpose?: string;
}

export interface GetOrdersQueryDto extends PaginationDto {
    user_id?: string | number;
    product_id?: string | number;
    sortBy?: 'quantity' | 'created_at' | 'updated_at';
    sortOrder?: 'asc' | 'desc';
    dateFrom?: string;
    dateTo?: string;
}

// Response DTOs
export interface OrderResponseDto {
    id: number;
    user_id: number;
    product_id: number;
    quantity: number;
    purpose?: string;
    created_at: Date;
    updated_at: Date;
    user?: {
        id: number;
        name: string;
    };
    product?: {
        id: number;
        name: string;
        unit: string;
        origin: string;
        note?: string;
    };
}