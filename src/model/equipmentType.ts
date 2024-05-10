import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createEquipmentType(name: string) {
  const equipmentType = await prisma.equipmentType.create({
    data: {
      name,
    },
  });
  return equipmentType;
};

export async function updateEquipmentTypeById(id: number, name: string) {
  const equipmentType = await prisma.equipmentType.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });
  return equipmentType;
};

export async function deleteEquipmentTypeById(id: number) {
  const equipmentType = await prisma.equipmentType.delete({
    where: {
      id,
    },
  });
  return equipmentType;
};

export async function findEquipmentTypes() {
  const equipmentTypes = await prisma.equipmentType.findMany();
  return equipmentTypes;
}

export async function findEquipmentType(id: number) {
  const equipmentType = await prisma.equipmentType.findUnique({
    where: {
      id,
    },
  });
  return equipmentType;
}