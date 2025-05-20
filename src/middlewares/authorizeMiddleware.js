export function authorizeRoles(...roles) {
    return (req, res, next) => {
        const userRoles = req.user.roles.map((role) => role.name);
        if (!roles.some((role) => userRoles.includes(role))) {
            return res.status(403).json({ message: 'Access denied' });
        }
        next();
    };
}

export function authorizePermissions(...permissions) {
    return (req, res, next) => {
        const userPermissions = req.user.roles.flatMap((role) => role.permissions.map((perm) => perm.name));
        if (!permissions.some((perm) => userPermissions.includes(perm))) {
            return res.status(403).json({ message: 'Access denied' });
        }
        next();
    };
}
