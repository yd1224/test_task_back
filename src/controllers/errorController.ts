import { Request, Response, NextFunction } from "express";

interface CustomError {
  status?: number;
  message?: string;
  data?: any;
  stack?: string;
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { status = 500, message = "Server error", data, stack } = err;

  if (process.env.NODE_ENV !== "development") {
    return res.status(status).json({
      message,
    });
  }

  res.status(status).json({
    message,
    data,
    stack,
  });
};
