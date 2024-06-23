import pkg from "pg";
import { config } from "dotenv";
const { Pool } = pkg;

config();
const pool = new Pool({});

export default pool;
