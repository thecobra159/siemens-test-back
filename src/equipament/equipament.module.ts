import { EquipamentController } from './equipament.controller'
import { EquipamentSchema } from './schemas/equipament.schema'
import { EquipamentService } from './equipament.service'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Equipament', schema: EquipamentSchema },
        ]),
    ],
    controllers: [EquipamentController],
    providers: [EquipamentService],
})
export class EquipamentModule {}
