import { Request, Response, NextFunction } from "express";
import { InternalServerError } from "../../lib/errors.js";
import { DemoRequest } from "../../middlewares/checktoken.js";
import model from "./model.js";

const POST = async (req: DemoRequest, res: Response, next: NextFunction) => {
  try {
    const exam = await model.POST(req.body, req.userId as string);

    return res.status(202).json({
      status: 202,
      message: "exam created",
      data: exam,
    });
  } catch (error) {
    const result = (error as Error).message;
    return next(new InternalServerError(500, result));
  }
};

const GETEXAMS = async (
  req: DemoRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const exams = await model.GETEXAMS();

    return res.status(200).json({
      status: 200,
      message: "ok",
      data: exams,
    });
  } catch (error) {
    const result = (error as Error).message;
    return next(new InternalServerError(500, result));
  }
};

const GET = async (req: DemoRequest, res: Response, next: NextFunction) => {
  try {
    const exam = await model.GET(req.params);

    return res.status(200).json({
      status: 200,
      message: "ok",
      data: exam,
    });
  } catch (error) {
    const result = (error as Error).message;
    return next(new InternalServerError(500, result));
  }
};

export default {
  POST,
  GET,
  GETEXAMS,
};
