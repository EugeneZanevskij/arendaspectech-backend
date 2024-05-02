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
  return user;
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

export async function updateUserById(userId: number, username: string, email: string, phone: string) {
  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      username,
      email,
      phone,
    }
  });
  return user;  
}

export async function deleteUserById(userId: number) {
  const user = await prisma.user.delete({
    where: {
      id: userId,
    },
  });
  return user;
}

export const findUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
}