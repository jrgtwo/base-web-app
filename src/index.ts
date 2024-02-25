import express, { Request, Response  } from 'express'

import { 
    AboutRoutes,
    ProjectsRoutes,
    HomeRoutes
} from './router';
import { Routes } from './constants/enums';

const app = express();
const port =  process.env.PORT || 8080;

app.use('/static', express.static('public'));

app.get(Routes.home, (req, res) => {
    res.send('Howdy');
});

app.use('/', HomeRoutes);
app.use('/about', AboutRoutes);
app.use('/projects', ProjectsRoutes);

app.listen(port, () => {
    console.log(`Server running at  http://localhost:${port}`);
})