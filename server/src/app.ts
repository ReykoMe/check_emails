import express, { ErrorRequestHandler } from "express";
import { simpleLogMiddleware } from "./middlewares/simple-logger.middleware";
import UserInfoRouter from "./user-info/user-info.routes";

const app = express();

const handleError: ErrorRequestHandler = (err, _, res, next): void => {
  res.status(500).send("Unhandled error");
};

app.use(simpleLogMiddleware);
app.use("/getUserInfo", UserInfoRouter);

app.use(handleError);

app.listen(8000, () => {
  console.log("server started");
});
