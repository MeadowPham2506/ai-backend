import { Response } from 'express';

declare interface ResponseData {
    code: number;
    message: string;
    data?: unknown;
    stack?: unknown;
    event?: string;
}

export class APIErrorResponse extends Error {
    _responseData: ResponseData;

    constructor(responseData: ResponseData) {
        super(responseData.message);
        this._responseData = responseData;
        this.name = 'APIErrorResponse';
        Error.captureStackTrace(this, this.constructor);
    }
}

export class APIResponse {
    _responseData: ResponseData;

    constructor(responseData: ResponseData) {
        this._responseData = responseData;
    }

    send(res: Response, header = {}): void {
        res.set(header);
        res.status(this._responseData.code).json({
            code: this._responseData.code,
            message: this._responseData.message,
            data: this._responseData.data,
            stack: this._responseData.stack
        });
    }
}
