import express from 'express';
import { timeTracker } from '../middleware/TimeTracker';

const router = express.Router();

router.use(timeTracker)

router.get('/', (req, res) => {
    res.send('About me!')
})

router.get('/skills', (req, res) => {
    res.send('My Skills')
})

export const AboutRoutes = router