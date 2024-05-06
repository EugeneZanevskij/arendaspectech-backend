import { Router } from "express";
import { addEquipmentType, deleteEquipmentType, getEquipmentTypes, updateEquipmentType } from "../controllers/equipmentTypeController";

const router = Router();

router.get("/", getEquipmentTypes);
router.post("/", addEquipmentType);
router.put("/:id", updateEquipmentType);
router.delete("/:id", deleteEquipmentType);

export default router;
