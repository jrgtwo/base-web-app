import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

app.use(express.static('../webapp/dist'));

app.listen(port, () => {
  console.log(`Server running at  http://${host}:${port}`);
});
