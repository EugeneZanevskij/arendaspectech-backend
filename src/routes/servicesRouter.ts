import { Router } from "express";
import { addService, deleteService, getService, getServices, updateService } from "../controllers/servicesController";


const router = Router();

router.get("/", getServices);
router.get("/:id", getService);
router.post("/", addService);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

export default router;