import { PaginationDto } from './index';

// DTO for getting orders with query parameters
export interface GetOrdersQueryDto extends PaginationDto {
    employee_code?: string;
    start_date?: string; // Format: dd/mm/yyyy
    end_date?: string;   // Format: dd/mm/yyyy
}

// DTO for creating a new order
export interface CreateOrderDto {
    employee_code: string;
    product_id: number;
    quantity: number;
    purpose?: string;
}

// Response DTO for order list
export interface OrderResponseDto {
    id: number;
    employee_name: string;
    product_id: number;
    quantity: number;
    purpose?: string | null;
}
