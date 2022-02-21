import { Router } from "express";
import * as UserInfoController from "./user-info.controller";

const router: Router = Router();

router.get("/byEmail", UserInfoController.getUserInfoByEmail);

export default router;
