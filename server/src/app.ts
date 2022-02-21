import express, { ErrorRequestHandler } from "express";
import { simpleLogMiddleware } from "./middlewares/simple-logger.middleware";
import UserInfoRouter from "./user-info/user-info.routes";
import cors from "cors";

const handleError: ErrorRequestHandler = (_e, _r, res): void => {
  res.status(500).send("Unhandled error");
};

const app = express();

app.use(cors());
app.use(simpleLogMiddleware);

app.use("/getUserInfo", UserInfoRouter);

app.use(handleError);

app.listen(8000, () => {
  console.log("server started");
});
