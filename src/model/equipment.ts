import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createEquipment(name: string, description: string, imagePath: string, price: number, equipmentTypeId: number) {
  const equipment = await prisma.equipment.create({
    data: {
      name,
      description,
      imagePath,
      price,
      equipmentTypeId,
    },
  });
  return equipment;
}

export async function updateEquipmentById(id: number, name: string, description: string, imagePath: string, price: number, equipmentTypeId: number) {
  const equipment = await prisma.equipment.update({
    where: {
      id,
    },
    data: {
      name,
      description,
      imagePath,
      price,
      equipmentTypeId
    },
  });
  return equipment;
};

export async function deleteEquipmentById(id: number) {
  const equipment = await prisma.equipment.delete({
    where: {
      id,
    },
  });
  return equipment;
};

export async function findEquipmentById(id: number) {
  const equipment = await prisma.equipment.findUnique({
    where: {
      id,
    },
  });
  return equipment;
};

export async function findEquipments() {
  const equipments = await prisma.equipment.findMany({
    include: { 
      equipmentToServices: {
        include: {
          services: true
        }
      }
    }
  });
  const result = equipments.map((equipment) => {
    const services = equipment.equipmentToServices.map((equipmentToService) => equipmentToService.services);
    const { equipmentToServices, ...equipmentWithoutServices } = equipment;
    return { ...equipmentWithoutServices, services };
  });
  return result;
};

