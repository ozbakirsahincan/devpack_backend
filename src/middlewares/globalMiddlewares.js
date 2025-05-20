import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import { requestLogger } from './loggerMiddleware';
import prismaContextMiddleware from './prismaContextMiddleware.js';


export default function applyMiddlewares(app) {
  app.use(helmet());
  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());

  p.use(prismaContextMiddleware);
  app.use(requestLogger);
}
