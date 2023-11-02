import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreatePointDTO {
    @ApiProperty({
        description: 'Temperature control',
        example: 'thermometer',
    })
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({
        description: 'Data type of the point',
        example: 'celsius',
    })
    @IsString()
    @IsNotEmpty()
    dataType: string

    @ApiProperty({
        description: 'Value of the point',
        example: 50,
    })
    @IsNumber()
    @IsNotEmpty()
    value: number

    @ApiProperty({
        description: 'Equipament id related to the point',
        example: '654420ed4d0930758c3b670d',
    })
    @IsString()
    @IsNotEmpty()
    equipmentId: string
}
