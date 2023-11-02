import { IsNumber, IsString } from 'class-validator'

export class UpdatePointDTO {
    @IsString()
    name: string

    @IsString()
    dataType: string

    @IsNumber()
    value: number

    @IsString()
    equipamentId: string
}
