import jwt from "jsonwebtoken";
import { Response } from "express";

export const generateToken = (res: Response, userId: number) => {
  const jwtSecret = "secret";
  const token = jwt.sign({ userId }, jwtSecret, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
  });
};
