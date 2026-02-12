import express from 'express';

import { getAllServices, addService } from '../controllers/serviceController.js';

const router = express.Router();

router.get('/services', getAllServices);
router.post('/services', addService);

export default router;