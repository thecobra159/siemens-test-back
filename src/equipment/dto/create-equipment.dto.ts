import { IsNotEmpty, IsString } from 'class-validator'

export class CreateEquipmentDTO {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    serialNumber: string
}
