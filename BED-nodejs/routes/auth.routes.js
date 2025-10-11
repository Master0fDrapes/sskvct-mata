import express from 'express';
import { login } from '../controllers/login.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';
import { withRole } from '../decorators/withRole.decorators.js';

const router = express.Router();

router.post('/login', login);

// Protected endpoint: returns static data
router.get('/dashboard', authenticate, withRole(['admin','user','manager','guest'], (req, res) => {
  // static data
  const data = {
    message: `Hello ${req.user.username}, welcome to your dashboard!`,
    role: req.user.role,
    meta: req.meta
  };

  res.json(data);
}));

export default router;