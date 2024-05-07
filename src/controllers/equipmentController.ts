import { Request, Response } from 'express';
import { findEquipments, createEquipment, updateEquipmentById, deleteEquipmentById, findEquipmentById } from "../model/equipment";

export const getEquipments = async(req: Request, res: Response) => {
  try {
    const equipments = await findEquipments();
    return res.status(200).json(equipments);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getEquipmentById = async(req: Request, res: Response) => {
  const id = +req.params.id;
  try {
    const equipment = await findEquipmentById(id);
    return res.status(200).json(equipment);
  } catch (error) {
    
  }
}

export const addEquipment = async(req: Request, res: Response) => {
  const { name, description, imagePath, price, equipmentTypeId } = req.body;
  try {
    const equipment = await createEquipment(name, description, imagePath, +price, equipmentTypeId);
    return res.status(201).json(equipment);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateEquipment = async(req: Request, res: Response) => {
  const id = +req.params.id;
  const { name, description, imagePath, price, equipmentTypeId } = req.body;
  try {
    const equipment = await updateEquipmentById(id, name, description, imagePath, price, equipmentTypeId);
    return res.status(200).json(equipment);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteEquipment = async(req: Request, res: Response) => {
  const id = +req.params.id;
  try {
    await deleteEquipmentById(id);
    return res.status(200).json({ message: 'Equipment deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}