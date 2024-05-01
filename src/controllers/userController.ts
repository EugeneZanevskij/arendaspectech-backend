import { Request, Response } from 'express';
import { findUserById, findUsers } from '../model/user';

export const getUser = async(req: Request, res: Response) => {
  let userId: number | undefined;
  const isAdmin = req.user?.isAdmin;
  if (isAdmin) {
    userId = +req.params.id;
  } else {
    userId = req.user?.id;
  }
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

export const getUsers = async(req: Request, res: Response) => {
  try {
    const users = await findUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}