import express from 'express';
import { timeTracker } from '../middleware/timeTracker';
import { DB } from '../database/db';
import { Get } from '../queries/get';
const router = express.Router();

router.use(timeTracker);

router.get('/', async (_, res) => {
  const result = await DB.query(Get.users);
  res.json(result.rows);
});

export const UsersRoutes = router;
