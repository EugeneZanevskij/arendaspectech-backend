import { Router } from "express";
import { addEquipment, deleteEquipment, deleteEquipmentToServices, getEquipmentById, getEquipments, updateEquipment } from "../controllers/equipmentController";
import { isAuthenticated, isAuthorized } from "../middlewares/authMiddleware";

const router = Router();

router.get("/", getEquipments);
router.get("/:id", isAuthenticated, getEquipmentById);
router.get("/:id/equipment-to-services", getEquipmentById);
router.post("/", isAuthorized, addEquipment);
router.put("/:id", isAuthorized, updateEquipment);
router.delete("/:id",isAuthorized, deleteEquipment);
router.delete("/:id/equipment-to-services",isAuthorized, deleteEquipmentToServices);

export default router;
