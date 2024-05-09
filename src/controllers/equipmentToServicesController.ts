import { Request, Response } from 'express';
import { findEquipmentToServices, createEquipmentToServices, findEquipmentToServicesByEquipmentId, deleteEquipmentToServicesByEquipmentId, findEquipmentToServicesById, findEquipmentToServicesByEquipmentIdAndServicesId } from "../model/equipmentToServices";

export const getEquipmentToServices = async(req: Request, res: Response) => {
  try {
    const equipmentToServices = await findEquipmentToServices();
    return res.status(200).json(equipmentToServices);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getEquipmentToServicesById = async(req: Request, res: Response) => {
  const id = +req.params.id;
  try {
    const equipmentToServices = await findEquipmentToServicesById(id);
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

export const getEquipmentToServicesByEquipmentIdAndServiceId = async(req: Request, res: Response) => {
  const {equipmentId, servicesId} = req.query;
  try {
    if (!equipmentId || !servicesId) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }
    const equipmentToServices = await findEquipmentToServicesByEquipmentIdAndServicesId(+equipmentId, +servicesId);
    return res.status(200).json(equipmentToServices);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
