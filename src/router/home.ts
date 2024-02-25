import express from 'express';
import { timeTracker } from '../middleware/TimeTracker';

const router = express.Router();

router.use(timeTracker);

router.get('/', (req, res) => {
    res.send('howdy');
})

export const HomeRoutes  = router