import { EquipamentService } from './equipament.service'
import { Test, TestingModule } from '@nestjs/testing'

describe('EquipamentService', () => {
    let service: EquipamentService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [EquipamentService],
        }).compile()

        service = module.get<EquipamentService>(EquipamentService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})
