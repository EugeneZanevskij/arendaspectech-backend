import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createBooking(userId: number, equipmentToServicesId: number, date: Date, leaseDuration: number, comment: string, statusId: number) {
  const booking = await prisma.booking.create({
    data: {
      userId,
      equipmentToServicesId,
      date,
      leaseDuration,
      comment,
      statusId
    },
  });
  return booking;
};

export async function findBookings() {
  const bookings = await prisma.booking.findMany();
  return bookings;
}

export async function findBookingById(id: number) {
  const booking = await prisma.booking.findUnique({
    where: {
      id
    },
  });
  return booking;
};

export async function findBookingsByUserId(userId: number) {
  const bookings = await prisma.booking.findMany({
    where: {
      userId
    },
  });
  return bookings;
};

export async function updateBookingById(id: number, equipmentToServicesId: number, date: Date, leaseDuration: number, comment: string, statusId: number) {
  const booking = await prisma.booking.update({
    where: {
      id
    },
    data: {
      equipmentToServicesId,
      date,
      leaseDuration,
      comment,
      statusId
    },
  });
  return booking;
};

export async function deleteBookingById(id: number) {
  const deletedBooking = await prisma.booking.delete({
    where: {
      id
    },
  });
  return deletedBooking;
};