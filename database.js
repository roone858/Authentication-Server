import { Pool } from "postgres-pool";
import dotenv from "dotenv";
dotenv.config();


export const Client = new Pool({
  database:process.env.DATABASE_NAME,
  host: "localhost",
  port: process.env.DATABASE_PORT,
  user:process.env.DATABASE_USER,
  password:process.env.DATABASE_PASSWORD,
});
