import express from 'express';
import 'dotenv/config';

import webapp from '@jrgtwo/webapp';

const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

console.log(webapp);
app.use(express.static('webapp'));

app.listen(port, () => {
  console.log(`Server running at  http://${host}:${port}`);
});
