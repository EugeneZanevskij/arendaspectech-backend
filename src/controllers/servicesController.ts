import { Request, Response } from 'express';
import { findServices, createService, updateServiceById, deleteServiceById, findServiceById } from "../model/services";

export const getServices = async(req: Request, res: Response) => {
  try {
    const services = await findServices();
    return res.status(200).json(services);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getService = async(req: Request, res: Response) => {
  const id = +req.params.id;
  try {
    const service = await findServiceById(id);
    return res.status(200).json(service);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const addService = async(req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const service = await createService(name);
    return res.status(201).json(service);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateService = async(req: Request, res: Response) => {
  const id = +req.params.id;
  const { name } = req.body;
  try {
    const service = await updateServiceById(id, name);
    return res.status(200).json(service);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteService = async(req: Request, res: Response) => {
  const id = +req.params.id;
  try {
    await deleteServiceById(id);
    return res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};
