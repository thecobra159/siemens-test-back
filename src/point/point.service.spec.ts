import { PointService } from './point.service'
import { Test, TestingModule } from '@nestjs/testing'

describe('PointService', () => {
    let service: PointService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PointService],
        }).compile()

        service = module.get<PointService>(PointService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})
