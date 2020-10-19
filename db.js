const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL;
const connectionTimeoutMillis = 3000;

const pool = new Pool({
  connectionString,
  connectionTimeoutMillis
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
