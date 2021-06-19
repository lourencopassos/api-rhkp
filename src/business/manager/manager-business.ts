import { ManagerInputDTO } from '../../model';
import { IManagerBusiness, IManagerDatabase } from '../../types';
import { schema as ManagerSchema } from './schema';

export class ManagerBusiness implements IManagerBusiness {
  private managerDatabase: IManagerDatabase;
  constructor(managerDatabase: IManagerDatabase) {
    this.managerDatabase = managerDatabase;
  }

  async addManager(manager: ManagerInputDTO) {

    const { error } = ManagerSchema.validate(manager);

    if (error) {
      throw new Error()
    }
  }
}
