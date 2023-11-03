import { ApiTags } from '@nestjs/swagger'
import { CreatePointDTO } from './dto/create-point.dto'
import { Point } from './schemas/point.schema'
import { PointService } from './point.service'
import { UpdatePointDTO } from './dto/update-point.dto'
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common'

@ApiTags('point')
@Controller('point')
export class PointController {
    constructor(private pointService: PointService) {}

    @Get()
    @UsePipes(new ValidationPipe({ transform: true }))
    async findAll(): Promise<Point[]> {
        return this.pointService.findAll()
    }

    @Get('/equipment/:id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async findAllByEquipmentId(
        @Param('id')
        id: string,
    ): Promise<Point[]> {
        return this.pointService.findAllByEquipmentId(id)
    }

    @Get(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async findById(
        @Param('id')
        id: string,
    ): Promise<Point> {
        return this.pointService.findById(id)
    }

    @Put(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
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
    @UsePipes(new ValidationPipe({ transform: true }))
    async create(
        @Body()
        point: CreatePointDTO,
    ): Promise<Point> {
        return this.pointService.create(point)
    }

    @Delete(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async deleteById(
        @Param('id')
        id: string,
    ): Promise<boolean> {
        return this.pointService.deleteById(id)
    }
}
