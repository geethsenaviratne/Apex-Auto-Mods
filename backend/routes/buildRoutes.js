import express from 'express';
import { saveBuild, getBuildsByUser } from '../controllers/buildController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Save a new build (authenticated)
router.post('/builds', authenticateToken, saveBuild);

// Get builds by user
router.get('/builds/:userId', getBuildsByUser);

export default router;
