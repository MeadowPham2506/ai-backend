/**
 * Standard API Response Interface
 * Sử dụng cho tất cả API responses trong ứng dụng
 */
export interface StandardApiResponse<T = any> {
    success: boolean;
    message: string;
    data?: T;
    error?: string;
    timestamp: Date;
    meta?: ResponseMeta;
}

/**
 * Response Meta Information
 * Thông tin bổ sung cho response (pagination, etc.)
 */
export interface ResponseMeta {
    page?: number;
    limit?: number;
    total?: number;
    totalPages?: number;
    [key: string]: any;
}

/**
 * Error Response Interface
 * Cấu trúc chuẩn cho error responses
 */
export interface ErrorResponse extends Omit<StandardApiResponse, 'data'> {
    success: false;
    error: string;
    path?: string;
    statusCode?: number;
    stack?: string;
}

/**
 * Success Response Interface
 * Cấu trúc chuẩn cho success responses
 */
export interface SuccessResponse<T = any> extends StandardApiResponse<T> {
    success: true;
    data: T;
}

/**
 * Pagination Response Interface
 * Cấu trúc chuẩn cho paginated responses
 */
export interface PaginatedResponse<T = any> extends SuccessResponse<T[]> {
    meta: ResponseMeta & {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}