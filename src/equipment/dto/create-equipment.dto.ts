import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class CreateEquipmentDTO {
    @ApiProperty({
        description:
            'Any capacitive device such as sensors, detectors, switches...',
        example: 'Switch',
    })
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({
        description: 'Device`s Serial number',
        example: 'R1WQ90J98JDSA8',
    })
    @IsString()
    @IsNotEmpty()
    serialNumber: string
}
