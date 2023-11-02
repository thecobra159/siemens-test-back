import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type EquipmentDocument = Equipment & Document

@Schema({
    timestamps: true,
})
export class Equipment {
    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    serialNumber: string
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment)
