import { Equipment } from '../schemas/equipment.schema'

export const equipmentStub = (): Equipment => {
    return {
        name: 'Equipment testing',
        serialNumber: 'sadfsadf213-sfsdaf213s',
    }
}
