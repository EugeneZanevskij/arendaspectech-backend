import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { findUserById } from '../model/user';


export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({status: 401, error: 'You are not authenticated' });
  }
  
  try {
    const decoded = jwt.verify(token, 'secret') as JwtPayload;
    if (!decoded || !decoded.userId) {
      return res.json({status: 401, error: 'UserId not found' });
    }
    
    const userId = decoded.userId;
    if (!userId) {
      return res.json({status: 401, error: 'User not found' });
    }
    req.userId = userId;
    next();
  } catch (error) {
    return res.json({status: 401, error: 'You are not authenticated' });
  }
};
