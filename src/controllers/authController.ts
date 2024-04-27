import { Request, Response, Router } from 'express';
import bcrypt from "bcrypt";
import { PrismaClient } from '@prisma/client';
import { createUser, findUserByEmail } from '../model/user';

const prisma = new PrismaClient();

export const register = async (req: Request, res: Response) => {
  try {
    const user = await findUserByEmail(req.body.email);
    if (user) {
      return res.json({ error: 'User already exists' });
    }
    const newUser = await createUser(req.body.username, req.body.email, req.body.phone, req.body.password);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to create user' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.json({ error: 'Email and password are required' });
    }
    const user = await findUserByEmail(req.body.email as string);
    if (!user) {
      return res.json({ error: 'No user found' });
    }
    const validPassword = await bcrypt.compare(req.body.password.toString(), user.password);
    if (!validPassword) {
      return res.json({ error: 'Invalid password' });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}