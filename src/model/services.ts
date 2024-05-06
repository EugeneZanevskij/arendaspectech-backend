import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createService(name: string) {
  const service = await prisma.services.create({
    data: {
      name,
    },
  });
  return service;
};

export async function updateServiceById(id: number, name: string) {
  const service = await prisma.services.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });
  return service;
};

export async function deleteServiceById(id: number) {
  const service = await prisma.services.delete({
    where: {
      id,
    },
  });
  return service;
};

export async function findServiceById(id: number) {
  const service = await prisma.services.findUnique({
    where: {
      id,
    },
  });
  return service;
};

export async function findServiceByName(name: string) {
  const service = await prisma.services.findUnique({
    where: {
      name,
    },
  });
  return service;
};

export async function findServices() {
  const services = await prisma.services.findMany();
  return services;
};
