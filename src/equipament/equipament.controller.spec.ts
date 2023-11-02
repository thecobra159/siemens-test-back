import { Equipament } from './schemas/equipament.schema'
import { EquipamentController } from './equipament.controller'
import { EquipamentService } from './equipament.service'
import { equipamentStub } from './__mocks__/equipament.stub'
import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'

jest.mock('./__mocks__/equipament.service')

describe('EquipamentController', () => {
    let controller: EquipamentController
    let service: EquipamentService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [EquipamentController],
            providers: [
                EquipamentService,
                {
                    provide: getModelToken(Equipament.name),
                    useValue: jest.fn(),
                },
            ],
            imports: [Equipament],
        }).compile()

        controller = module.get<EquipamentController>(EquipamentController)
        service = module.get<EquipamentService>(EquipamentService)
        jest.clearAllMocks()
    })

    describe('findAll', () => {
        describe('when findAll is called', () => {
            let equipament: Equipament[]

            beforeEach(async () => {
                equipament = await controller.findAll()
            })

            test('should call equipamentService', () => {
                expect(service.findAll).toHaveBeenCalledWith([equipamentStub()])
            })
            test('should return all equipaments', () => {
                expect(equipament).toEqual([equipamentStub()])
            })
        })
    })

    describe('create', () => {
        describe('when create is called', () => {
            let equipament: Equipament

            beforeEach(async () => {
                equipament = await controller.create(equipamentStub())
            })

            test('should call equipamentService', () => {
                expect(service.create).toBeCalledWith(equipamentStub())
            })
            test('should same equipament', () => {
                expect(equipament.name).toEqual(equipamentStub().name)
                expect(equipament.serialNumber).toEqual(
                    equipamentStub().serialNumber,
                )
            })
        })
    })
})
