import { Router } from "express";
import { addEquipmentToServices, deleteEquipmentToServices, getEquipmentToServices, getEquipmentToServicesByEquipmentId } from "../controllers/equipmentToServicesController";

const router = Router();

router.get("/", getEquipmentToServices);
router.get("/:id", getEquipmentToServicesByEquipmentId);
router.post("/", addEquipmentToServices);
router.delete("/:id", deleteEquipmentToServices);

export default router;
