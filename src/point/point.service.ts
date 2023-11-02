import { CreatePointDTO } from './dto/create-point.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Point } from './schemas/point.schema'
import { UpdatePointDTO } from './dto/update-point.dto'
import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common'

@Injectable()
export class PointService {
    constructor(
        @InjectModel(Point.name)
        private pointModel: Model<Point>,
    ) {}

    async findAll(): Promise<Point[]> {
        try {
            return await this.pointModel.find()
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async findAllByEquipamentId(id: string): Promise<Point[]> {
        try {
            const points = await this.pointModel.find()

            if (points.length === 0) {
                return []
            }

            return points.filter(p => p.equipamentId === id)
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async findById(id: string): Promise<Point> {
        try {
            const point = await this.pointModel.findById(id)

            if (!point) {
                throw new NotFoundException(`Point ${id} not found`)
            }

            return point
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async updateById(id: string, point: UpdatePointDTO): Promise<Point> {
        try {
            const res = await this.pointModel.findByIdAndUpdate(id, point, {
                new: true,
                runValidators: true,
            })

            if (!res) {
                throw new NotFoundException()
            }

            return res
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async deleteById(id: string): Promise<boolean> {
        try {
            const res = await this.pointModel.findByIdAndDelete(id)

            if (!res) {
                return false
            }

            return true
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async create(equipament: CreatePointDTO): Promise<Point> {
        try {
            return await this.pointModel.create(equipament)
        } catch (error) {
            throw new BadRequestException(error)
        }
    }
}
