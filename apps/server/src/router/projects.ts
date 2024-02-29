import express from 'express';
import { timeTracker } from '../middleware/timeTracker.js';
const router = express.Router();

router.use(timeTracker);

router.get('/', (_, res) => {
  res.send('Projects!');
});

export const ProjectsRoutes = router;
