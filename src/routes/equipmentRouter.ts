import { Router } from "express";
import { addEquipment, deleteEquipment, deleteEquipmentToServices, getEquipmentById, getEquipments, updateEquipment } from "../controllers/equipmentController";
import { isAuthenticated, isAuthorized } from "../middlewares/authMiddleware";

const router = Router();

router.get("/", getEquipments);
router.get("/:id", isAuthenticated, getEquipmentById);
router.get("/:id/equipment-to-services", getEquipmentById);
router.post("/", isAuthenticated, isAuthorized, addEquipment);
router.put("/:id",isAuthenticated, isAuthorized, updateEquipment);
router.delete("/:id", isAuthenticated, isAuthorized, deleteEquipment);
router.delete("/:id/equipment-to-services", isAuthenticated, isAuthorized, deleteEquipmentToServices);

export default router;
