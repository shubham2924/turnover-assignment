// config.js
import dotenv from 'dotenv';
dotenv.config();
export default {
  databaseURL: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  port: process.env.PORT
};