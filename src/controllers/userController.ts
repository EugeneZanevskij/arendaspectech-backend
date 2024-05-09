import { Request, Response } from 'express';
import { deleteUserById, findUserById, findUsers, updateUserById } from '../model/user';
import { findBookingsByUserId } from '../model/booking';

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

export const getUsersBookings = async(req: Request, res: Response) => {
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
    const bookings = await findBookingsByUserId(userId!);
    return res.status(200).json(bookings);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export const deleteUser = async(req: Request, res: Response) => {
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
    await deleteUserById(userId!);
    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export const updateUser = async (req: Request, res: Response) => {
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
    const user = await updateUserById(userId!, req.body.username, req.body.email, req.body.phone);
    return res.status(200).json(user);
  }
  catch (error) {
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