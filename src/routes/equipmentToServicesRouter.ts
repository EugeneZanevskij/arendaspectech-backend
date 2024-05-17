import { Router } from "express";
import { addEquipmentToServices, deleteEquipmentToServices, getEquipmentToServices, getEquipmentToServicesByEquipmentIdAndServiceId, getEquipmentToServicesById } from "../controllers/equipmentToServicesController";
import { isAuthorized } from "../middlewares/authMiddleware";

const router = Router();

router.get("/", getEquipmentToServices);
router.get("/equipment", getEquipmentToServicesByEquipmentIdAndServiceId);
router.get("/:id", getEquipmentToServicesById);
router.post("/", isAuthorized, addEquipmentToServices);
router.delete("/:id", isAuthorized, deleteEquipmentToServices);

export default router;
