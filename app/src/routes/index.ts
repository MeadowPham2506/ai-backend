import { ApiResponseHandler } from '@src/core/response.core';
import RESPONSE from '@src/constants/response.constant';
import express, { Request, Response } from 'express';
import v1 from '@src/routes/v1';
import v2 from '@src/routes/v2';

const router = express.Router();
router.use('/api/v1', v1);
router.use('/api/v2', v2);

// Health check route
router.get('/', (_req: Request, res: Response) => {
    return ApiResponseHandler.sendSuccess(
        res,
        { status: 'OK', version: '1.0.0' },
        RESPONSE.RESPONSE_REASON.OK
    );
});

// Catch-all route for undefined endpoints
router.use('*', (req: Request, res: Response) => {
    return ApiResponseHandler.sendNotFound(
        res,
        RESPONSE.RESPONSE_REASON.NOT_FOUND,
        req.path
    );
});

export default router;
