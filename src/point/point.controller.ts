import { ApiTags } from '@nestjs/swagger'
import { CreatePointDTO } from './dto/create-point.dto'
import { Point } from './schemas/point.schema'
import { PointService } from './point.service'
import { UpdatePointDTO } from './dto/update-point.dto'
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'

@ApiTags('point')
@Controller('point')
export class PointController {
    constructor(private pointService: PointService) {}

    @Get()
    async findAll(): Promise<Point[]> {
        return this.pointService.findAll()
    }

    @Get('/equipment/:id')
    async findAllByEquipmentId(
        @Param('id')
        id: string,
    ): Promise<Point[]> {
        return this.pointService.findAllByEquipmentId(id)
    }

    @Get(':id')
    async findById(
        @Param('id')
        id: string,
    ): Promise<Point> {
        return this.pointService.findById(id)
    }

    @Put(':id')
    async updateById(
        @Param('id')
        id: string,
        @Body()
        point: UpdatePointDTO,
    ): Promise<Point> {
        const pointDto = this.findById(id)
        const updateDTO = { ...pointDto, ...point }
        return this.pointService.updateById(id, updateDTO)
    }

    @Post()
    async create(
        @Body()
        point: CreatePointDTO,
    ): Promise<Point> {
        return this.pointService.create(point)
    }

    @Delete(':id')
    async deleteById(
        @Param('id')
        id: string,
    ): Promise<boolean> {
        return this.pointService.deleteById(id)
    }
}
