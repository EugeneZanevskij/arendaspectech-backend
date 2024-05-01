import { Router } from "express";
import { getUser, getUsers } from "../controllers/userController";
import { isAuthorized } from "../middlewares/authMiddleware";


const router = Router();

router.get("/", isAuthorized, getUsers);
router.get("/:id", getUser);

export default router;