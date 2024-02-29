import express from 'express';
import { timeTracker } from '../middleware/timeTracker.js';
import { DB } from '../database/db.js';
import { Get } from '../queries/get/index.js';
const router = express.Router();

router.use(timeTracker);

router.get('/', async (_, res) => {
  const result = await DB.query(Get.users);
  res.json(result.rows);
});

export const UsersRoutes = router;
