import { Request, Response, NextFunction } from "express";
import { InternalServerError } from "../../lib/errors.js";
import { DemoRequest } from "../../middlewares/checktoken.js";
import model from "./model.js";

const POST = async (req: DemoRequest, res: Response, next: NextFunction) => {
  try {
    const answer = await model.POST(
      req.params.testId,
      req.body,
      req.userId as string
    );

    return res.status(202).json({
      status: 202,
      message: "answer created",
      data: answer,
    });
  } catch (error) {
    const result = (error as Error).message;
    return next(new InternalServerError(500, result));
  }
};

export default {
  POST,
};
