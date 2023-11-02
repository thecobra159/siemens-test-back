import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type EquipamentDocument = Equipament & Document

@Schema({
    timestamps: true,
})
export class Equipament {
    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    serialNumber: string
}

export const EquipamentSchema = SchemaFactory.createForClass(Equipament)
