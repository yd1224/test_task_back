import { NextFunction, Response } from "express";

import { Contact, getContactByEmail } from "../services/contactsServices";
import { HttpError } from "../helpers/HttpError";
import { catchAsync } from "../helpers/catchAsync";

export interface CustomRequest {
  query: Contact;
  contact?: Contact[] | Contact;
}

export const checkContactExist = catchAsync(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    const { email, number } = req.query;

    if (!email) {
      throw HttpError(400, "Email is required");
    }

    const contact = await getContactByEmail(email, number);

    if (!contact) {
      throw HttpError(404, "Not found");
    }

    req.contact = contact;

    next();
  }
);
