import { Document } from 'mongoose';
import { MissingParameterError, NotFoundError } from '../../error';
import { ManagerEditDTO, ManagerInputDTO, ManagerModel } from '../../model';
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
      console.log(error);
      throw new Error();
    }

    const alreadyInDatabase = await this.managerDatabase.getManagersByEmail(
      manager.email
    );

    if (alreadyInDatabase) {
      throw new Error();
    }

    await this.managerDatabase.addManager(manager);
  }

  async getManagerById(id: string): Promise<Document> {
    if (!id) {
      throw new MissingParameterError('id');
    }

    const manager = await this.managerDatabase.getManagerById(id);

    if (!manager) {
      throw new NotFoundError();
    }

    return manager;
  }

  async getManagerByEmail(email: string): Promise<Document> {
    if (!email) {
      throw new MissingParameterError('email');
    }

    const manager = await this.managerDatabase.getManagersByEmail(email);

    if (!manager) {
      throw new NotFoundError();
    }

    return manager;
  }

  async getManagerByName(name: string): Promise<Document | Document[]> {
    if (!name) {
      throw new MissingParameterError('name');
    }

    const manager = await this.managerDatabase.getManagersByName(name);

    if (!manager) {
      throw new NotFoundError();
    }

    return manager;
  }

  async deleteManager(id: string): Promise<void> {
    if (!id) {
      throw new MissingParameterError('id');
    }

    const manager = await this.managerDatabase.getManagerById(id);

    if (!manager) {
      throw new NotFoundError();
    }

    await this.managerDatabase.deleteManager(id);
  }

  async updateManager(manager: ManagerEditDTO, id: string): Promise<void> {
    if (!id) {
      throw new MissingParameterError('id');
    }

    if (!manager) {
      throw new MissingParameterError('manager to update');
    }

    const managerToUpdate = await this.managerDatabase.getManagerById(id);

    if (!managerToUpdate) {
      throw new NotFoundError();
    }

    await this.managerDatabase.updateManager(manager, id);
  }
}
