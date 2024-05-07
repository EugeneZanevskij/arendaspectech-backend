import { Request, Response } from 'express';
import { findStatuses, createStatus, updateStatusById } from "../model/status";

export const getStatuses = async(req: Request, res: Response) => {
  try {
    const statuses = await findStatuses();
    return res.status(200).json(statuses);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const addStatus = async(req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const status = await createStatus(name);
    return res.status(201).json(status);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateStatus = async(req: Request, res: Response) => {
  const id = +req.params.id;
  const { name } = req.body;
  try {
    const status = await updateStatusById(id, name);
    return res.status(200).json(status);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}