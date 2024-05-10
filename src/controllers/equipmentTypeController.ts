import { Request, Response } from 'express';
import { findEquipmentTypes, createEquipmentType, updateEquipmentTypeById, deleteEquipmentTypeById, findEquipmentType } from "../model/equipmentType";

export const getEquipmentTypes = async(req: Request, res: Response) => {
  try {
    const equipmentTypes = await findEquipmentTypes();
    return res.status(200).json(equipmentTypes);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getEquipmentType = async(req: Request, res: Response) => {
  const id = +req.params.id;
  try {
    const equipmentType = await findEquipmentType(id);
    return res.status(200).json(equipmentType);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export const addEquipmentType = async(req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const equipmentType = await createEquipmentType(name);
    return res.status(201).json(equipmentType);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateEquipmentType = async(req: Request, res: Response) => {
  const id = +req.params.id;
  const { name } = req.body;
  try {
    const equipmentType = await updateEquipmentTypeById(id, name);
    return res.status(200).json(equipmentType);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteEquipmentType = async(req: Request, res: Response) => {
  const id = +req.params.id;
  try {
    await deleteEquipmentTypeById(id);
    return res.status(200).json({ message: 'Equipment type deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}