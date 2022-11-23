import { NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";

class err extends Error {
  status!: number;
}

export default (
  error: err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error.status != 500) {
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
    });
  }

  fs.appendFileSync(
    path.resolve(process.cwd(), "log.txt"),
    `${req.url}--------${req.method}---------${new Date()}---------${
      error.message
    }\n`
  );

  res.status(error.status).json({
    status: error.status,
    message: error.name,
  });
  process.exit();
};
