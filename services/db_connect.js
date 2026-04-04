import 'dotenv/config';
import pg from 'pg';
const { Pool } = pg;

export const pool = new Pool({
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
  user: process.env.DB_USER,
  password: process.env.USER_PASSWORD,
});
