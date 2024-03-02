import express from 'express';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { catchAllHandler, errorHandler } from './server/index.js';

const ENV_PATH = import.meta.resolve('@jrgtwo/shared');
dotenv.config({ path: fileURLToPath(`${ENV_PATH}dist/dev.env`) });
const WEBAPP_PATH = import.meta.resolve('@jrgtwo/webapp');

const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

app.use(express.static(fileURLToPath(WEBAPP_PATH)));

app.use('/', (_, res) => {
  res.sendFile(fileURLToPath(`${WEBAPP_PATH}index.html`));
});

app.use(catchAllHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at  http://${host}:${port}`);
});
