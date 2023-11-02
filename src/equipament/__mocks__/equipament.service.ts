import { equipamentStub } from './equipament.stub'

export const EquipamentService = jest.fn().mockReturnValue({
    findAll: jest.fn().mockResolvedValue([equipamentStub()]),
    findById: jest.fn().mockResolvedValue(equipamentStub()),
    updateById: jest.fn().mockResolvedValue(equipamentStub()),
    create: jest.fn().mockResolvedValue(equipamentStub()),
    deleteById: jest.fn().mockResolvedValue(equipamentStub()),
})
