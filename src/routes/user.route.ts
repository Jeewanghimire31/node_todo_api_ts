import { Router } from "express";
import { signup, login, refreshAccessToken } from "../controller/user.controller";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/refresh-token", refreshAccessToken);

export default router;
