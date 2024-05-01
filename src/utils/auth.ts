import jwt from "jsonwebtoken";
import { Response } from "express";

interface UserBasicInfo {
  id: number;
  email: string;
  isAdmin: boolean;
}

export const generateToken = (res: Response, payload: UserBasicInfo) => {
  const jwtSecret = "secret";
  const token = jwt.sign(payload, jwtSecret, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
};

export const clearToken = (res: Response) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
  })
}