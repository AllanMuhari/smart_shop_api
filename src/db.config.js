import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "smart_shop",
  password: "9828",
  port: 5432,
});

export default pool;
