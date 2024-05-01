import { Request, Response } from 'express';
import bcrypt from "bcrypt";
import { createUser, findUserByEmail } from '../model/user';
import { clearToken, generateToken } from '../utils/auth';


export const register = async (req: Request, res: Response) => {
  try {
    const user = await findUserByEmail(req.body.email);
    if (user) {
      return res.status(409).json({ error: 'User already exists' });
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
      return res.status(400).json({ error: 'Email and password are required' });
    }
    const user = await findUserByEmail(email as string);
    if (!user) {
      return res.status(404).json({ error: 'No user found' });
    }
    const validPassword = await bcrypt.compare(password.toString(), user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    generateToken(res, { id: user.id, email: user.email, isAdmin: user.isAdmin });
    res.status(200).json({ id: user.id, email: user.email });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export const logout = async (req: Request, res: Response) => {
  clearToken(res);
  res.status(200).json({ message: 'Logged out successfully' });
}