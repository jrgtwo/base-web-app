import express from 'express';
import { timeTracker } from '../middleware/timeTracker.js';

const router = express.Router();

router.use(timeTracker);

export const HomeRoutes = router;
