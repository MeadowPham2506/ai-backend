const serverConfig: ServerConfig = {
    env: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.SERVER_PORT || '8080', 10),
    limiter: {
        limit: parseInt(process.env.LIMITER_MAX_REQUESTS || '100', 10),
        windowMs: parseInt(process.env.LIMITER_WINDOW_MS || '15', 10) * 60 * 1000 // 15 minutes
    }
    
}

export default serverConfig;