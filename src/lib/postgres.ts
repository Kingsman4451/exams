import { pgconfig } from "./../config.js";
import pg, { Pool } from "pg";

const pool: Pool = new pg.Pool(pgconfig);

async function fetchAll(SQL: string, params = []) {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(SQL, params);
    return rows;
  } catch (error) {
    const result = (error as Error).message;
    throw new Error(result);
  } finally {
    client.release();
  }
}

async function fetch(SQL: string, params = []) {
  const client = await pool.connect();
  try {
    const {
      rows: [row],
    } = await client.query(SQL, params);
    return row;
  } catch (error) {
    const result = (error as Error).message;
    throw new Error(result);
  } finally {
    client.release();
  }
}

export { fetch, fetchAll };
