import express from 'express';
import 'dotenv/config';

import {
  AboutRoutes,
  ProjectsRoutes,
  HomeRoutes,
  UsersRoutes
} from './router';
import { Routes } from './constants/enums';

const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

app.use(Routes.static, express.static('public'));

app.use(Routes.home, HomeRoutes);
app.use(Routes.about, AboutRoutes);
app.use(Routes.projects, ProjectsRoutes);
app.use(Routes.users, UsersRoutes);

app.listen(port, () => {
  console.log(`Server running at  http://${host}:${port}`);
});
