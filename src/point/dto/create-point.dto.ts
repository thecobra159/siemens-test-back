import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreatePointDTO {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    dataType: string

    @IsNumber()
    @IsNotEmpty()
    value: number

    @IsString()
    @IsNotEmpty()
    equipamentId: string
}
