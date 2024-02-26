import express from 'express';
import { timeTracker } from '../middleware/timeTracker';

const router = express.Router();

router.use(timeTracker);

router.get('/', (_, res) => {
  res.send('howdy');
});

export const HomeRoutes = router;
