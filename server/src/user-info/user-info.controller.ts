import { Request, Response, NextFunction } from "express";
import * as UserInfoService from "./user-info.service";
export const getUserInfoByEmail = async (
  req: Request<any, any, any, { email: string }>,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.query;
  try {
    const userInfo = await UserInfoService.getInfoByEmail(email);
    res.status(200).send(userInfo);
  } catch (err) {
    next(err);
  }
};
