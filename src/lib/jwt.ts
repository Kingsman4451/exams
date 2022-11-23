import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";

export default {
  sign: (payload: string | object) => jwt.sign(payload, SECRET as string),
  verify: (token: string) => jwt.verify(token, SECRET as string),
};
