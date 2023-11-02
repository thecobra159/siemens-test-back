import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { PointController } from './point.controller'
import { PointSchema } from './schemas/point.schema'
import { PointService } from './point.service'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Point', schema: PointSchema }]),
    ],
    controllers: [PointController],
    providers: [PointService],
})
export class PointModule {}
