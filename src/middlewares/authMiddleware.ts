import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';


export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({status: 401, error: 'You are not authenticated' });
  }
  
  try {
    const decoded = jwt.verify(token, 'secret') as JwtPayload;
    if (!decoded || !decoded.id || !decoded.email) {
      return res.json({status: 401, error: 'User not found' });
    }

    const { id, email, isAdmin } = decoded;
    
    req.user = { id, email, isAdmin };
    next();
  } catch (error) {
    return res.json({status: 401, error: 'You are not authenticated' });
  }
};

export const isAuthorized = (req: Request, res: Response, next: NextFunction) => {
  const isAdmin = req.user?.isAdmin
  if (isAdmin) {
    next();
  } else {
    return res.json({status: 403, error: 'You are not authorized' });
  }
};
