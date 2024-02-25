import express from 'express'
import { timeTracker } from '../middleware/TimeTracker';
const router = express.Router();

router.use(timeTracker)

router.get('/', (req, res) => {
    res.send('Projects!')
})

export const ProjectsRoutes = router;