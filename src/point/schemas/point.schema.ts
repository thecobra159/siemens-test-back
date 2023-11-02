import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type PointDocument = Point & Document

@Schema({
    timestamps: true,
})
export class Point {
    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    dataType: string

    @Prop({ required: true })
    value: number

    @Prop({ required: true })
    equipamentId: string
}

export const PointSchema = SchemaFactory.createForClass(Point)
