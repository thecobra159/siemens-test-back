import { IsNotEmpty, IsString } from 'class-validator'

export class CreateEquipamentDTO {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    serialNumber: string
}
