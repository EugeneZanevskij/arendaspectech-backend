import { Router } from "express";
import { addStatus, getStatuses, updateStatus } from "../controllers/statusController";

const router = Router();

router.get("/", getStatuses);
router.post("/", addStatus);
router.put("/:id", updateStatus);

export default router;
