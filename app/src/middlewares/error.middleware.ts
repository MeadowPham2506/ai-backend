import { Request, Response, NextFunction } from 'express';
import RESPONSE from '@src/constants/response.constant';
import serverConfig from '@src/configs/server.config';
import { APIResponse } from '@src/core/response.core';

function errorHandler(error: any, _req: Request, res: Response, _next: NextFunction): void {
    if (error._responseData) {
        return new APIResponse({
            message: error._responseData.message,
            code: error._responseData.code,
            stack: serverConfig.env === 'development' ? error.message : undefined,
        }).send(res);
    } else {
        return new APIResponse({
            message: RESPONSE.RESPONSE_REASON.INTERNAL_SERVER_ERROR,
            code: RESPONSE.RESPONSE_CODE.INTERNAL_SERVER_ERROR,
            stack: serverConfig.env === 'development' ? error.message : undefined,
        }).send(res);
    }
}

export default errorHandler;