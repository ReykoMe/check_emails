import { NextFunction, Request, Response } from "express";
export const simpleLogMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.on("finish", () => {
    console.log(Date.now(), req.method, res.statusCode, req.originalUrl);
  });

  next();
};
