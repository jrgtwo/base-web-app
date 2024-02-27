"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
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
exports.DB = {
    query: (text, params) => pool.query(text, params)
};
