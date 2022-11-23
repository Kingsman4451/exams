import * as dotenv from "dotenv";
dotenv.config();
export const PORT = process.env.PORT || 5000;
export const pgconfig = {
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
};
export const SECRET = process.env.JWT_SECRETKEY;
