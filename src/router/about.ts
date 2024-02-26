import express from 'express';
import { timeTracker } from '../middleware/timeTracker';

const router = express.Router();

router.use(timeTracker);

router.get('/', (_, res) => {
  res.send('About me!');
});

router.get('/skills', (_, res) => {
  res.send('My Skills');
});

export const AboutRoutes = router;
