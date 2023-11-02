import { IsString } from 'class-validator'

export class UpdateEquipamentDTO {
    @IsString()
    name: string

    @IsString()
    serialNumber: string
}
