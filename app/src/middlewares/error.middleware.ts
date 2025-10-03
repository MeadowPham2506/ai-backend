import { Request, Response, NextFunction } from 'express';
import RESPONSE from '@src/constants/response.constant';
import serverConfig from '@src/configs/server.config';
import { ApiResponseHandler, APIErrorResponse } from '@src/core/response.core';
import logger from '@src/core/logger.core';

function errorHandler(error: any, req: Request, res: Response, _next: NextFunction): void {
    // Log error for debugging
    logger.error('Error occurred:', {
        message: error.message,
        stack: error.stack,
        path: req.path,
        method: req.method,
        body: req.body,
        params: req.params,
        query: req.query
    });

    // Prevent duplicate response
    if (res.headersSent) {
        return;
    }

    // Handle APIErrorResponse
    if (error instanceof APIErrorResponse) {
        ApiResponseHandler.sendError(
            res,
            error.message,
            error.statusCode,
            serverConfig.env === 'development' ? error.stack : undefined,
            req.path
        );
        return;
    }

    // Handle Prisma errors
    if (error.code && error.code.startsWith('P')) {
        const statusCode = 400;
        const message = 'Database operation failed';
        ApiResponseHandler.sendError(
            res,
            message,
            statusCode,
            serverConfig.env === 'development' ? error.message : undefined,
            req.path
        );
        return;
    }

    // Handle validation errors
    if (error.name === 'ValidationError') {
        ApiResponseHandler.sendError(
            res,
            'Validation failed',
            400,
            serverConfig.env === 'development' ? error.message : undefined,
            req.path
        );
        return;
    }
    
    // Handle generic errors
    const statusCode = error.statusCode || RESPONSE.RESPONSE_CODE.INTERNAL_SERVER_ERROR;
    const message = error.message || RESPONSE.RESPONSE_REASON.INTERNAL_SERVER_ERROR;
    
    ApiResponseHandler.sendError(
        res,
        message,
        statusCode,
        serverConfig.env === 'development' ? error.stack : undefined,
        req.path
    );
}

export default errorHandler;