import { ApiTags } from '@nestjs/swagger'
import { CreateEquipmentDTO } from './dto/create-equipment.dto'
import { Equipment } from './schemas/equipment.schema'
import { EquipmentService } from './equipment.service'
import { UpdateEquipmentDTO } from './dto/update-equipment.dto'
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'

@ApiTags('equipment')
@Controller('equipment')
export class EquipmentController {
    constructor(private equipmentService: EquipmentService) {}

    @Get()
    async findAll(): Promise<Equipment[]> {
        return this.equipmentService.findAll()
    }

    @Get(':id')
    async findById(
        @Param('id')
        id: string,
    ): Promise<Equipment> {
        return this.equipmentService.findById(id)
    }

    @Put(':id')
    async updateById(
        @Param('id')
        id: string,
        @Body()
        equipment: UpdateEquipmentDTO,
    ): Promise<Equipment> {
        const equipmentDto = this.findById(id)
        const updateDTO = { ...equipmentDto, ...equipment }
        return this.equipmentService.updateById(id, updateDTO)
    }

    @Post()
    async create(
        @Body()
        equipment: CreateEquipmentDTO,
    ): Promise<Equipment> {
        return this.equipmentService.create(equipment)
    }

    @Delete(':id')
    async deleteById(
        @Param('id')
        id: string,
    ): Promise<boolean> {
        return this.equipmentService.deleteById(id)
    }
}
