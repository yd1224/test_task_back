import { Response, NextFunction } from "express";
import { catchAsync } from "../helpers/catchAsync";

import { CustomRequest } from "../middlewares/contactsMiddlewares";

export const getOneContact = catchAsync(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    const { contact } = req;

    setTimeout(() => {
      res.status(200).json({
        ...contact,
      });
    }, 5000);
  }
);
