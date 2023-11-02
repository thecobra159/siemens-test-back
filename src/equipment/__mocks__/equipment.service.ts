import { equipmentStub } from './equipment.stub'

export const EquipmentService = jest.fn().mockReturnValue({
    findAll: jest.fn().mockResolvedValue([equipmentStub()]),
    findById: jest.fn().mockResolvedValue(equipmentStub()),
    updateById: jest.fn().mockResolvedValue(equipmentStub()),
    create: jest.fn().mockResolvedValue(equipmentStub()),
    deleteById: jest.fn().mockResolvedValue(equipmentStub()),
})
