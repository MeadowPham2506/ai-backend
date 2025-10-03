import { Request, Response, NextFunction, RequestHandler } from 'express';

/**
 * Async wrapper để tự động catch errors và pass cho error middleware
 */
export const asyncWrapper = (fn: RequestHandler) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

export default asyncWrapper;