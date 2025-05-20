import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import { requestLogger } from './loggerMiddleware';
import typeOrmContextMiddleware from './typeOrmContextMiddleware.js';
import { authorizeRoles, authorizePermissions } from './authorizeMiddleware';
import { authMiddleware } from './authMiddleware';

export default function applyMiddlewares(app) {
  app.use(helmet());
  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());

  app.use(typeOrmContextMiddleware);
  app.use(requestLogger);
  app.use(authMiddleware);
}
