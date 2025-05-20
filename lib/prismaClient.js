import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { getActor } from './actorContext.js';

const prisma = new PrismaClient();

const logDir = 'logs';
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);
const auditLogPath = path.join(logDir, 'audit.log');

prisma.$use(async (params, next) => {
  const result = await next(params);

  if (['create', 'update', 'delete'].includes(params.action)) {
    const actor = getActor(); // async local'den alıyoruz

    const logEntry = {
      timestamp: new Date().toISOString(),
      actor,
      model: params.model,
      action: params.action,
      targetId: params.args.where?.id || result?.id || null,
      newData: params.args.data || null,
    };

    fs.appendFileSync(auditLogPath, JSON.stringify(logEntry) + '\n');
  }

  return result;
});

export default prisma;
