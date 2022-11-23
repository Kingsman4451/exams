import { pgconfig } from "./../config.js";
import pg from "pg";
const pool = new pg.Pool(pgconfig);
async function fetchAll(SQL, params = []) {
    const client = await pool.connect();
    try {
        const { rows } = await client.query(SQL, params);
        return rows;
    }
    catch (error) {
        const result = error.message;
        throw new Error(result);
    }
    finally {
        client.release();
    }
}
async function fetch(SQL, params = []) {
    const client = await pool.connect();
    try {
        const { rows: [row], } = await client.query(SQL, params);
        return row;
    }
    catch (error) {
        const result = error.message;
        throw new Error(result);
    }
    finally {
        client.release();
    }
}
export { fetch, fetchAll };
