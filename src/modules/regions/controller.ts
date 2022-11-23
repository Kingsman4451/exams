import { Request, Response, NextFunction } from "express";
import { InternalServerError } from "../../lib/errors.js";
import model from "./model.js";

const GET = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const regions = await model.GET();

    return res.status(200).json({
      status: 200,
      message: "ok",
      data: regions,
    });
  } catch (error) {
    const result = (error as Error).message;
    return next(new InternalServerError(500, result));
  }
};

export default {
  GET,
};
