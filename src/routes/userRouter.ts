import { Router } from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/userController";
import { isAuthorized } from "../middlewares/authMiddleware";


const router = Router();

router.get("/", isAuthorized, getUsers);
router.get("/:id", getUser);
router.get("/:id/bookings", getUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;