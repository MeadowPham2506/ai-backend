import { Request, Response, NextFunction } from 'express';

export function authorize(
    _req: Request,
    _res: Response,
    next: NextFunction,
): void {
    next();
};

async function authentication(_req: Request, _res: Response, next: NextFunction): Promise<void> {
    next();
}

export default authentication;
