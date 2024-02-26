const { Pool } = require('pg');

const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB_NAME;

const pool = new Pool({
  user,
  password,
  host,
  port,
  database
});

export const DB = {
  query: (text: string, params?: any) => pool.query(text, params)
};
