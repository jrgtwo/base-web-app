import express, { RequestHandler, ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

app.use(express.static('../webapp/dist'));

const catchAllHandler: RequestHandler = (_, res) => {
  res.status(404).send('its a 404');
};

const errorHandler: ErrorRequestHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.log(err.stack);
  res.status(500).send('its a 500!! Yikes');
};

app.use(catchAllHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at  http://${host}:${port}`);
});
