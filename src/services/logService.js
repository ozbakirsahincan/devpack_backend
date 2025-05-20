import fs from 'fs';
import path from 'path';

// Log klasörünü kontrol et, yoksa oluştur
const logDir = path.resolve('logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const auditLogPath = path.join(logDir, 'audit.log');

// Basit log yazıcı
export function writeAuditLog({ actor, action, metadata = {} }) {
  const time = new Date().toISOString();
  const logEntry = {
    timestamp: time,
    actor,
    action,
    metadata
  };

  const logLine = JSON.stringify(logEntry) + '\n';
  fs.appendFileSync(auditLogPath, logLine, 'utf8');
}
