import { CreateEquipmentDTO } from './dto/create-equipment.dto'
import { Equipment } from './schemas/equipment.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { UpdateEquipmentDTO } from './dto/update-equipment.dto'
import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common'

@Injectable()
export class EquipmentService {
    constructor(
        @InjectModel(Equipment.name)
        private equipmentModel: Model<Equipment>,
    ) {}

    async findAll(): Promise<Equipment[]> {
        try {
            return await this.equipmentModel.find()
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async findById(id: string): Promise<Equipment> {
        try {
            const equipment = await this.equipmentModel.findById(id)

            if (!equipment) {
                throw new NotFoundException(`Equipment ${id} not found`)
            }

            return equipment
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async updateById(
        id: string,
        equipment: UpdateEquipmentDTO,
    ): Promise<Equipment> {
        try {
            const res = await this.equipmentModel.findByIdAndUpdate(
                id,
                equipment,
                {
                    new: true,
                    runValidators: true,
                },
            )

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
            const res = await this.equipmentModel.findByIdAndDelete(id)

            if (!res) {
                return false
            }

            return true
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async create(equipment: CreateEquipmentDTO): Promise<Equipment> {
        try {
            return await this.equipmentModel.create(equipment)
        } catch (error) {
            throw new BadRequestException(error)
        }
    }
}
