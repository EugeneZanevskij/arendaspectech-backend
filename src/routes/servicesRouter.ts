import { Router } from "express";
import { addService, deleteService, getService, getServices, updateService } from "../controllers/servicesController";
import { isAuthorized } from "../middlewares/authMiddleware";


const router = Router();

router.get("/", getServices);
router.get("/:id", getService);
router.post("/", isAuthorized, addService);
router.put("/:id", isAuthorized, updateService);
router.delete("/:id", isAuthorized, deleteService);

export default router;