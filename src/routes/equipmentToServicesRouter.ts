import { Router } from "express";
import { addEquipmentToServices, deleteEquipmentToServices, getEquipmentToServices, getEquipmentToServicesByEquipmentIdAndServiceId, getEquipmentToServicesById } from "../controllers/equipmentToServicesController";

const router = Router();

router.get("/", getEquipmentToServices);
router.get("/equipment", getEquipmentToServicesByEquipmentIdAndServiceId);
router.get("/:id", getEquipmentToServicesById);
router.post("/", addEquipmentToServices);
router.delete("/:id", deleteEquipmentToServices);

export default router;
