import { Router } from "express";

import { getOneContact } from "../controllers/contactsControllers";
import { checkContactExist } from "../middlewares/contactsMiddlewares";

export const contactsRouter: Router = Router();

contactsRouter.get("/", checkContactExist, getOneContact);
