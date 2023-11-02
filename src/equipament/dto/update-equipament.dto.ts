import { IsNotEmpty, IsString } from 'class-validator'

export class UpdateEquipamentDTO {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    serialNumber: string
}
