import { Request, Response } from 'express';
import bcrypt from "bcrypt";
import { createUser, findUserByEmail } from '../model/user';
import { generateToken } from '../utils/auth';


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
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.json({ error: 'Email and password are required' });
    }
    const user = await findUserByEmail(email as string);
    if (!user) {
      return res.json({ error: 'No user found' });
    }
    const validPassword = await bcrypt.compare(password.toString(), user.password);
    if (!validPassword) {
      return res.json({ error: 'Invalid password' });
    }
    generateToken(res, user.id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export const logout = async (req: Request, res: Response) => {
  res.clearCookie("token");
  res.status(200).json({ message: 'Logged out successfully' });
}