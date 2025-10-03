import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import favicon from 'serve-favicon';
import fs from 'fs';
import path from 'path';
import limiterMiddleware from '@src/middlewares/limiter.middleware';
import authenticationMiddleware from './middlewares/auth.middleware';
import errorHandler from '@src/middlewares/error.middleware';
import routers from '@src/routes';

const app = express();

const logDirectory = path.join(__dirname, './logs');
if (!fs.existsSync(logDirectory)) fs.mkdirSync(logDirectory);
const accessLogStream = fs.createWriteStream(path.join(logDirectory, 'app.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));
app.set('trust proxy', '127.0.0.1');
app.use(favicon(path.join(__dirname, './public', 'favicon.png')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined', { stream: accessLogStream }));
app.use(cors({ origin: '*' }));
app.use(helmet());
app.use(compression());
app.use(limiterMiddleware);
app.use(authenticationMiddleware);
app.use(routers);
app.use(errorHandler);

export default app;