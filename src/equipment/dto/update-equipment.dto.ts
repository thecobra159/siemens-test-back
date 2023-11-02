import { IsString } from 'class-validator'

export class UpdateEquipmentDTO {
    @IsString()
    name: string

    @IsString()
    serialNumber: string
}
