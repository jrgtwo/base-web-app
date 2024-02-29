import express from 'express';
import 'dotenv/config';

import { catchAllHandler, errorHandler } from './server';

const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

app.use(express.static('../webapp/dist'));

app.use(catchAllHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at  http://${host}:${port}`);
});
