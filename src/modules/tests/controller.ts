import { Request, Response, NextFunction } from "express";
import { InternalServerError } from "../../lib/errors.js";
import { DemoRequest } from "../../middlewares/checktoken.js";
import model from "./model.js";

const GET = async (req: DemoRequest, res: Response, next: NextFunction) => {
  try {
    const tests = await model.GET(req.query);

    return res.status(200).json({
      status: 200,
      message: "ok",
      data: tests,
    });
  } catch (error) {
    const result = (error as Error).message;
    return next(new InternalServerError(500, result));
  }
};

export default {
  GET,
};
