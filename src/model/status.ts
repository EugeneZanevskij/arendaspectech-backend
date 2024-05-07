import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createStatus(name: string) {
  const status = await prisma.status.create({
    data: {
      name
    },
  });
  return status;
};

export async function findStatusById(id: number) {
  const status = await prisma.status.findUnique({
    where: {
      id
    },
  });
  return status;
};

export async function findStatuses() {
  const statuses = await prisma.status.findMany();
  return statuses;
};

export async function updateStatusById(id: number, name: string) {
  const status = await prisma.status.update({
    where: {
      id
    },
    data: {
      name
    },
  });
  return status;
};
