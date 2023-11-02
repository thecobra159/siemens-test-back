import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class UpdatePointDTO {
    @ApiProperty({
        description: 'Optional - Temperature control',
        example: 'thermometer',
    })
    @IsString()
    name: string

    @ApiProperty({
        description: 'Optional - Data type of the point',
        example: 'celsius',
    })
    @IsString()
    dataType: string

    @ApiProperty({
        description: 'Optional - Value of the point',
        example: 50,
    })
    @IsNumber()
    value: number

    @ApiProperty({
        description: 'Optional - Equipament id related to the point',
        example: '654420ed4d0930758c3b670d',
    })
    @IsString()
    equipmentId: string
}
