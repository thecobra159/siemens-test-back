import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { EquipmentModule } from './equipment/equipment.module'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { PointModule } from './point/point.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        MongooseModule.forRoot(process.env.DB_URI),
        EquipmentModule,
        PointModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
