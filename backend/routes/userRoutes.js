import express from 'express';
import { registerUser, loginUser, getProfile } from '../controllers/useController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);
router.get('/auth/profile', authenticateToken, getProfile);

export default router;