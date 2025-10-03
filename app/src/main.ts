import dotenv from 'dotenv';
dotenv.config();

import http from 'http';
import app from '@src/app';
import Database from '@src/core/database.core';
import logger from '@src/core/logger.core';
import serverConfig from '@src/configs/server.config';

async function startServer() {
    const server = http.createServer(app);
    server.listen(serverConfig.port, async () => {
        await Database.connectPrisma();
        logger.success(`Server is running on port ${serverConfig.port} in ${serverConfig.env} mode`);
    })
}

startServer();