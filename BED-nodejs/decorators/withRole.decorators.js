const roleHandlers = {
  admin: (req) => {
    console.log(`[ADMIN ACCESS] User ${req.user.username} accessed ${req.originalUrl}`);
    req.meta = { scope: 'full_access' };
  },
  user: (req) => {
    console.log(`[USER ACCESS] User ${req.user.username} accessed ${req.originalUrl}`);
    req.meta = { scope: 'limited_access' };
  },
  manager: (req) => {
    console.log(`[MANAGER ACCESS] ${req.user.username} is watching`);
    req.meta = { scope: 'reports_access' };
  },
  guest: (req) => {
    console.log(`[GUEST ACCESS] Restricted view`);
    req.meta = { scope: 'read_only' };
  }
};

export function withRole(allowedRoles, handler) {
  return function (req, res, next) {
    const userRole = req.user?.role;

    if (!userRole || !allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: 'Access denied: insufficient role' });
    }

    if (roleHandlers[userRole]) {
      roleHandlers[userRole](req);
    }

    return handler(req, res, next);
  };
}