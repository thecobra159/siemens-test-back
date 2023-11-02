import { EquipmentController } from './equipment.controller'
import { EquipmentSchema } from './schemas/equipment.schema'
import { EquipmentService } from './equipment.service'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Equipment', schema: EquipmentSchema },
        ]),
    ],
    controllers: [EquipmentController],
    providers: [EquipmentService],
})
export class EquipmentModule {}
