import { Router } from "express";
import { addStatus, getStatuses, updateStatus } from "../controllers/statusController";
import { isAuthorized } from "../middlewares/authMiddleware";

const router = Router();

router.get("/", getStatuses);
router.post("/", isAuthorized, addStatus);
router.put("/:id", isAuthorized, updateStatus);

export default router;
