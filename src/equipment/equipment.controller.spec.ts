import { Equipment } from './schemas/equipment.schema'
import { EquipmentController } from './equipment.controller'
import { EquipmentService } from './equipment.service'
import { equipmentStub } from './__mocks__/equipment.stub'
import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'

jest.mock('./__mocks__/equipment.service')

describe('EquipmentController', () => {
    let controller: EquipmentController
    let service: EquipmentService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [EquipmentController],
            providers: [
                EquipmentService,
                {
                    provide: getModelToken(Equipment.name),
                    useValue: jest.fn(),
                },
            ],
            imports: [Equipment],
        }).compile()

        controller = module.get<EquipmentController>(EquipmentController)
        service = module.get<EquipmentService>(EquipmentService)
        jest.clearAllMocks()
    })

    describe('findAll', () => {
        describe('when findAll is called', () => {
            let equipment: Equipment[]

            beforeEach(async () => {
                equipment = await controller.findAll()
            })

            test('should call equipmentService', () => {
                expect(service.findAll).toHaveBeenCalledWith([equipmentStub()])
            })
            test('should return all equipments', () => {
                expect(equipment).toEqual([equipmentStub()])
            })
        })
    })

    describe('create', () => {
        describe('when create is called', () => {
            let equipment: Equipment

            beforeEach(async () => {
                equipment = await controller.create(equipmentStub())
            })

            test('should call equipmentService', () => {
                expect(service.create).toBeCalledWith(equipmentStub())
            })
            test('should same equipment', () => {
                expect(equipment.name).toEqual(equipmentStub().name)
                expect(equipment.serialNumber).toEqual(
                    equipmentStub().serialNumber,
                )
            })
        })
    })
})
