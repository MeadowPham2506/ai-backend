import rateLimit from 'express-rate-limit';
import RESPONSE from '@src/constants/response.constant';
import serverConfig from '@src/configs/server.config';

const limiter = rateLimit({
    windowMs: serverConfig.limiter.windowMs,
    limit: serverConfig.limiter.limit,
    statusCode: RESPONSE.RESPONSE_CODE.TOO_MANY_REQUESTS,
    message: RESPONSE.RESPONSE_REASON.TOO_MANY_REQUESTS,
    legacyHeaders: true,
    standardHeaders: 'draft-8'
});

export default limiter;