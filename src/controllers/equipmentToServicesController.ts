import { Request, Response } from 'express';
import { findEquipmentToServices, createEquipmentToServices, findEquipmentToServicesByEquipmentId, deleteEquipmentToServicesByEquipmentId } from "../model/equipmentToServices";

export const getEquipmentToServices = async(req: Request, res: Response) => {
  try {
    const equipmentToServices = await findEquipmentToServices();
    return res.status(200).json(equipmentToServices);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getEquipmentToServicesByEquipmentId = async(req: Request, res: Response) => {
  const equipmentId = +req.params.id;
  try {
    const equipmentToServices = await findEquipmentToServicesByEquipmentId(equipmentId);
    return res.status(200).json(equipmentToServices);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export const addEquipmentToServices = async(req: Request, res: Response) => {
  const { equipmentId, servicesIds } = req.body;
  const servicesIdsNumbers = servicesIds.split(',').map(Number);
  try {
    const equipmentToServices = await createEquipmentToServices(equipmentId, servicesIdsNumbers);
    return res.status(201).json(equipmentToServices);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteEquipmentToServices = async(req: Request, res: Response) => {
  const equipmentId = +req.params.id;
  try {
    await deleteEquipmentToServicesByEquipmentId(equipmentId);
    return res.status(200).json({ message: 'Equipment to services deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}

