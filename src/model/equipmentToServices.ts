import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function findEquipmentToServices() {
  const equipmentToServices = await prisma.equipmentToServices.findMany();
  return equipmentToServices;
}

export async function findEquipmentToServicesById(id: number) {
  const equipmentToServices = await prisma.equipmentToServices.findUnique({
    where: {
      id
    }
  });
  return equipmentToServices;
}

export async function findEquipmentToServicesByEquipmentId(equipmentId: number) {
  const equipmentToServices = await prisma.equipmentToServices.findMany({
    where: {
      equipmentId
    }
  });
  return equipmentToServices;
}

export async function findEquipmentToServicesByEquipmentIdAndServicesId(equipmentId: number, servicesId: number) {
  const equipmentToServices = await prisma.equipmentToServices.findFirst({
    where: {
      equipmentId,
      servicesId
    }
  });
  return equipmentToServices;
}

export async function createEquipmentToServices(equipmentId: number, servicesIds: number[]) {
  const equipmentToServicesPromises = servicesIds.map((servicesId) => {
    return prisma.equipmentToServices.create({
      data: {
        equipmentId,
        servicesId,
      },
    });
  });

  const equipmentToServices = await Promise.all(equipmentToServicesPromises);
  return equipmentToServices;
}

export async function deleteEquipmentToServicesById(id: number) {
  const deletedEquipmentToServices = await prisma.equipmentToServices.deleteMany({
    where: {
      id,
    },
  });
  return deletedEquipmentToServices;
}

export async function deleteEquipmentToServicesByEquipmentId(equipmentId: number) {
  const deletedEquipmentToServices = await prisma.equipmentToServices.deleteMany({
    where: {
      equipmentId,
    },
  });
  return deletedEquipmentToServices;
}