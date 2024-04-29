import { Request, Response } from 'express';
import { findUserById } from '../model/user';

export const getMe = async(req: Request, res: Response) => {
  const userId = req.userId;
  if (!userId) {
    res.status(400);
  } 
  try {
    const user = await findUserById(userId!);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}