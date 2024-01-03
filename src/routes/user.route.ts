import { Router } from "express";
import { signup, login, refreshAccessToken } from "../controller/user.controller";
import { validateSchema } from "../middleware/todoValidation.middleware";
import { loginSchema, refreshTokenSchema, signupSchema } from "../schema/user.schema";

const router = Router();

router.post("/signup", validateSchema(signupSchema),signup);
router.post("/login", validateSchema(loginSchema), login);
router.post("/refresh-token", validateSchema(refreshTokenSchema),refreshAccessToken);

export default router;
