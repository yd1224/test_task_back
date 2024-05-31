import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";

import { errorHandler } from "./controllers/errorController";
import { contactsRouter } from "./routes/contactsRouter";

const app: express.Application = express();

app.use(morgan("tiny"));

app.use(cors());

app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Route not found" });
});

app.all("*", (req: Request, res: Response) => {
  res.status(404).json({ message: "Resource not found" });
});

app.use(errorHandler);

const port: number = 3000;

app.listen(port, () => {
  console.log(`Server is running. Use our API on port: ${port}`);
});
