// auth.middleware.ts
import { NextFunction, Request, Response } from "express";
import { verifyAccessToken } from "../utils/auth";

export const authenticateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - Access token missing" });
  }

  try {
    const user = verifyAccessToken(token);
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - Invalid access token" });
  }
};
