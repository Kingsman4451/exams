import { Request, Response, NextFunction } from "express";
import { ForbiddenError } from "../lib/errors.js";
import customjwt from "../lib/jwt.js";
import jwt from "jsonwebtoken";

export interface DemoRequest extends Request {
  userId?: string;
}

export default (req: DemoRequest, res: Response, next: NextFunction) => {
  try {
    let { token } = req.headers;

    if (!token) {
      return next(new ForbiddenError(403, "token required"));
    }
    const { userId } = customjwt.verify(token as string) as jwt.JwtPayload;
    req.userId = userId;

    return next();
  } catch (error) {
    const result = (error as Error).message;
    return next(new ForbiddenError(403, result));
  }
};
