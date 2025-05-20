export function requestLogger(req, res, next) {
    const userId = req.user?.id || 'anonymous';
    const method = req.method;
    const url = req.originalUrl;
    const ip = req.ip;
    const time = new Date().toISOString();
  
    console.log(`[${time}] ${method} ${url} by ${userId} from ${ip}`);
    
    next();
}
