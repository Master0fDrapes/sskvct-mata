// utils/mysql.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

let pool;

export const initMySQL = async () => {
  try {
    pool = await mysql.createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
    console.log('✅ MySQL Connected');
    return pool;
  } catch (err) {
    console.error('❌ MySQL Connection Error:', err);
    process.exit(1); // exit if DB connection fails
  }
};

export const getPool = () => {
  if (!pool) {
    throw new Error('MySQL pool not initialized. Call initMySQL() first.');
  }
  return pool;
};