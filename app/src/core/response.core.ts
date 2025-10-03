import { Response } from 'express';
import { ErrorResponse, SuccessResponse, PaginatedResponse, ResponseMeta } from '@src/types/common/response.types';

/**
 * Enhanced API Response Class
 * Cung cấp methods tiện ích để tạo standardized responses
 */
export class ApiResponseBuilder {
    /**
     * Tạo success response
     */
    static success<T>(
        data: T,
        message: string = 'Success',
        meta?: ResponseMeta
    ): SuccessResponse<T> {
        return {
            success: true,
            message,
            data,
            timestamp: new Date(),
            ...(meta && { meta })
        };
    }

    /**
     * Tạo paginated response
     */
    static paginated<T>(
        data: T[],
        pagination: { page: number; limit: number; total: number; totalPages: number },
        message: string = 'Data retrieved successfully'
    ): PaginatedResponse<T> {
        return {
            success: true,
            message,
            data,
            timestamp: new Date(),
            meta: pagination
        };
    }

    /**
     * Tạo error response
     */
    static error(
        message: string,
        error?: string,
        statusCode?: number,
        path?: string
    ): ErrorResponse {
        return {
            success: false,
            message,
            error: error || message,
            timestamp: new Date(),
            ...(statusCode && { statusCode }),
            ...(path && { path })
        };
    }
}

/**
 * API Response Handler Class
 * Xử lý việc send response với status code phù hợp
 */
export class ApiResponseHandler {
    /**
     * Send success response
     */
    static sendSuccess<T>(
        res: Response,
        data: T,
        message: string = 'Success',
        statusCode: number = 200,
        meta?: ResponseMeta
    ): Response {
        const response = ApiResponseBuilder.success(data, message, meta);
        return res.status(statusCode).json(response);
    }

    /**
     * Send paginated response
     */
    static sendPaginated<T>(
        res: Response,
        data: T[],
        pagination: { page: number; limit: number; total: number; totalPages: number },
        message: string = 'Data retrieved successfully',
        statusCode: number = 200
    ): Response {
        const response = ApiResponseBuilder.paginated(data, pagination, message);
        return res.status(statusCode).json(response);
    }

    /**
     * Send error response
     */
    static sendError(
        res: Response,
        message: string,
        statusCode: number = 500,
        error?: string,
        path?: string
    ): Response {
        const response = ApiResponseBuilder.error(message, error, statusCode, path);
        return res.status(statusCode).json(response);
    }

    /**
     * Send not found response
     */
    static sendNotFound(
        res: Response,
        message: string = 'Resource not found',
        path?: string
    ): Response {
        return this.sendError(res, message, 404, message, path);
    }

    /**
     * Send bad request response
     */
    static sendBadRequest(
        res: Response,
        message: string = 'Bad request',
        error?: string
    ): Response {
        return this.sendError(res, message, 400, error);
    }

    /**
     * Send unauthorized response
     */
    static sendUnauthorized(
        res: Response,
        message: string = 'Unauthorized'
    ): Response {
        return this.sendError(res, message, 401);
    }

    /**
     * Send forbidden response
     */
    static sendForbidden(
        res: Response,
        message: string = 'Forbidden'
    ): Response {
        return this.sendError(res, message, 403);
    }
}

export const APIErrorResponse = class extends Error {
    statusCode: number;
    
    constructor(message: string, statusCode: number = 500) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'APIErrorResponse';
        Error.captureStackTrace(this, this.constructor);
    }
};
