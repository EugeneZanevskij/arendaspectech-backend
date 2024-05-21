import { Request, Response } from 'express';
import { findBookings, findBookingById, createBooking, updateBookingById, deleteBookingById } from "../model/booking";

export const getBookings = async(req: Request, res: Response) => {
  try {
    const bookings = await findBookings();
    return res.status(200).json(bookings);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getBookingsById = async(req: Request, res: Response) => {
  const id = +req.params.id;
  try {
    const booking = await findBookingById(id);
    return res.status(200).json(booking);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const addBooking = async(req: Request, res: Response) => {
  const { userId, equipmentToServicesId, date, leaseDuration, comment, statusId } = req.body;
  try {
    const booking = await createBooking(userId, equipmentToServicesId, date, +leaseDuration, comment, statusId);
    return res.status(201).json(booking);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateBooking = async(req: Request, res: Response) => {
  const id = +req.params.id;
  const { equipmentToServicesId, date, leaseDuration, comment, statusId } = req.body;
  const newDate = new Date(date);
  try {
    const booking = await updateBookingById(id, equipmentToServicesId, newDate, +leaseDuration, comment, statusId);
    return res.status(200).json(booking);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteBooking = async(req: Request, res: Response) => {
  const id = +req.params.id;
  try {
    await deleteBookingById(id);
    return res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}