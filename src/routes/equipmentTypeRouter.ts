import { Router } from "express";
import { addEquipmentType, deleteEquipmentType, getEquipmentType, getEquipmentTypes, updateEquipmentType } from "../controllers/equipmentTypeController";
import { isAuthenticated, isAuthorized } from "../middlewares/authMiddleware";

const router = Router();

router.get("/", getEquipmentTypes);
router.get("/:id", getEquipmentType);
router.post("/", isAuthenticated, isAuthorized, addEquipmentType);
router.put("/:id", isAuthenticated, isAuthorized, updateEquipmentType);
router.delete("/:id", isAuthenticated, isAuthorized, deleteEquipmentType);

export default router;
