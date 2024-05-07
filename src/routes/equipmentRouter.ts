import { Router } from "express";
import { addEquipment, deleteEquipment, getEquipments, updateEquipment } from "../controllers/equipmentController";

const router = Router();

router.get("/", getEquipments);
router.post("/", addEquipment);
router.put("/:id", updateEquipment);
router.delete("/:id", deleteEquipment);

export default router;
