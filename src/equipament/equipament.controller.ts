import { CreateEquipamentDTO } from './dto/create-equipament.dto'
import { Equipament } from './schemas/equipament.schema'
import { EquipamentService } from './equipament.service'
import { UpdateEquipamentDTO } from './dto/update-equipament.dto'
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'

@Controller('equipament')
export class EquipamentController {
    constructor(private equipamentService: EquipamentService) {}

    @Get()
    async findAll(): Promise<Equipament[]> {
        return this.equipamentService.findAll()
    }

    @Get(':id')
    async findById(
        @Param('id')
        id: string,
    ): Promise<Equipament> {
        return this.equipamentService.findById(id)
    }

    @Put(':id')
    async updateById(
        @Param('id')
        id: string,
        @Body()
        equipament: UpdateEquipamentDTO,
    ): Promise<Equipament> {
        const equipamentDto = this.findById(id)
        const updateDTO = { ...equipamentDto, ...equipament }
        return this.equipamentService.updateById(id, updateDTO)
    }

    @Post()
    async create(
        @Body()
        equipament: CreateEquipamentDTO,
    ): Promise<Equipament> {
        return this.equipamentService.create(equipament)
    }

    @Delete(':id')
    async deleteById(
        @Param('id')
        id: string,
    ): Promise<boolean> {
        return this.equipamentService.deleteById(id)
    }
}
