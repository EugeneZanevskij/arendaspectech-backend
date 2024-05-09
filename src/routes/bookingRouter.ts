import { Router } from "express";
import { addBooking, deleteBooking, getBookings, getBookingsById, updateBooking } from "../controllers/bookingController";

const router = Router();

router.get("/", getBookings);
router.get("/:id", getBookingsById);
router.post("/", addBooking);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);

export default router;
