import { Request, Response, NextFunction } from "express";
import { ForbiddenError, InternalServerError } from "../../lib/errors.js";
import model from "./model.js";

const GET = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const subjects = await model.GET();

    return res.status(200).json({
      status: 200,
      message: "ok",
      data: subjects,
    });
  } catch (error) {
    const result = (error as Error).message;
    return next(new InternalServerError(500, result));
  }
};

const GETSECOND = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const subjects = await model.GETSECOND(req.params);
    if (!subjects) {
      return next(new ForbiddenError(401, "Subject not found"));
    }

    return res.status(200).json({
      status: 200,
      message: "ok",
      data: subjects,
    });
  } catch (error) {
    const result = (error as Error).message;
    return next(new InternalServerError(500, result));
  }
};

export default {
  GET,
  GETSECOND,
};
