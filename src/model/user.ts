import { PrismaClient } from '@prisma/client';
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function createUser(username: string, email: string, phone: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      username,
      email,
      phone,
      password: hashedPassword,
      isAdmin: false,
    },
  });
  return user;
}

export async function findUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
}

export async function findUserById(id: number) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  if (!user) {
    return null;
  }
  return {id: user.id, username: user.username, email: user.email, phone: user.phone, isAdmin: user.isAdmin};
}

export async function updateUserPassword(userId: number, newPassword: string) {
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      password: hashedPassword,
    },
  });
  return user;
}

export async function deleteUser(userId: number) {
  const user = await prisma.user.delete({
    where: {
      id: userId,
    },
  });
  return user;
}
