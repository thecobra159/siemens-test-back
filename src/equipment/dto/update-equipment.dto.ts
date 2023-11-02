import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class UpdateEquipmentDTO {
    @ApiProperty({
        description:
            'Optional - Any capacitive device such as ' +
            'sensors, detectors, switches...',
        example: 'Switch',
    })
    @IsString()
    name: string

    @ApiProperty({
        description: 'Optional - Device`s Serial number',
        example: 'R1WQ90J98JDSA8',
    })
    @IsString()
    serialNumber: string
}
