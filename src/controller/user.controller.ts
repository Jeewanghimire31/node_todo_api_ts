import { Request, Response } from "express";
import UserService from "../service/user.service";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../utils/auth";

export const signup = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const existingUser = await UserService.getUserByUsername(username);
  if (existingUser) {
    return res
      .status(400)
      .json({ success: false, message: "Username already exists" });
  }

  const user = await UserService.createUser(username, password);

  res.json({ success: true, message: "User created successfully", user });
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await UserService.getUserByUsername(username);
  if (!user || !(await UserService.comparePasswords(password, user.password))) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid credentials" });
  }

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  res.json({
    success: true,
    message: "Login successful",
    accessToken,
    refreshToken,
  });
};

export const refreshAccessToken = async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  try {
    const user = verifyRefreshToken(refreshToken);

    const accessToken = generateAccessToken(user);
    res.json({ success: true, accessToken });
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid refresh token" });
  }
};
