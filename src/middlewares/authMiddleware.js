import jwt from 'jsonwebtoken';

export function authMiddleware(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1]; // Bearer token
    if (!token) {
        return res.status(401).json({ message: 'Authentication token is missing' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // JWT doğrulama
        req.user = decoded; // Kullanıcı bilgilerini req.user'a ekle
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
}