import jwt from "jsonwebtoken";

interface UserBasicInfo {
  id: number;
  email: string;
  isAdmin: boolean;
}

export const generateToken = (payload: UserBasicInfo): string => {
  const jwtSecret = "secret";
  const token = jwt.sign(payload, jwtSecret, {
    expiresIn: "1d",
  });

  return token;
};