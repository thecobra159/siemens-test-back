import { Equipament } from './schemas/equipament.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common'

@Injectable()
export class EquipamentService {
    constructor(
        @InjectModel(Equipament.name)
        private equipamentModel: Model<Equipament>,
    ) {}

    async findAll(): Promise<Equipament[]> {
        try {
            return await this.equipamentModel.find()
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async findById(id: string): Promise<Equipament> {
        try {
            const equipament = await this.equipamentModel.findById(id)

            if (!equipament) {
                throw new NotFoundException(`Equipament ${id} not found`)
            }

            return equipament
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async updateById(id: string, equipament: Equipament): Promise<Equipament> {
        try {
            return await this.equipamentModel.findByIdAndUpdate(
                id,
                equipament,
                {
                    new: true,
                    runValidators: true,
                },
            )
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async deleteById(id: string): Promise<boolean> {
        try {
            const res = await this.equipamentModel.findByIdAndDelete(id)

            if (!res) {
                return false
            }

            return true
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async create(equipament: Equipament): Promise<Equipament> {
        try {
            return await this.equipamentModel.create(equipament)
        } catch (error) {
            throw new BadRequestException(error)
        }
    }
}
