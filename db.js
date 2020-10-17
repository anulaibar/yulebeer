const { Pool } = require("pg");

const isProduction = process.env.NODE_ENV === "production";

const connectionString = process.env.DATABASE_URL
  ? process.env.DATABASE_URL
  : "postgresql://localhost:5432/yb";

const pool = new Pool({
  connectionString,
  ssl: isProduction,
  connectionTimeoutMillis: 3000
});

const query = async (q, p = []) => {
  const client = await pool.connect();
  let res;
  try {
    await client.query("BEGIN");
    try {
      res = await client.query(q, p);
      await client.query("COMMIT");
    } catch (err) {
      await client.query("ROLLBACK");
      throw err;
    }
  } finally {
    client.release();
  }
  return res;
};

module.exports = query;
