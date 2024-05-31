import { Response, NextFunction } from "express";

import { CustomRequest } from "../middlewares/contactsMiddlewares";

type AsyncFunction = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => Promise<any>;

export const catchAsync = (fn: AsyncFunction) => {
  return (req: CustomRequest, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err) => {
      next(err);
    });
  };
};
