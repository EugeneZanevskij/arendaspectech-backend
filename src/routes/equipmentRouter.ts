import { Router } from "express";
import { addEquipment, deleteEquipment, deleteEquipmentToServices, getEquipmentById, getEquipments, updateEquipment } from "../controllers/equipmentController";

const router = Router();

router.get("/", getEquipments);
router.get("/:id", getEquipmentById);
router.get("/:id/equipment-to-services", getEquipmentById);
router.post("/", addEquipment);
router.put("/:id", updateEquipment);
router.delete("/:id", deleteEquipment);
router.delete("/:id/equipment-to-services", deleteEquipmentToServices);

export default router;
