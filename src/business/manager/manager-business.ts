import { Document } from 'mongoose';
import {
  InvalidParameterError,
  MissingParameterError,
  NotFoundError
} from '../../error';
import { ManagerEditDTO, ManagerInputDTO } from '../../model';
import { IManagerBusiness, IManagerDatabase } from '../../types';
import { IHashManager } from '../../types/utils';
import { schema as ManagerSchema } from './schema';

export class ManagerBusiness implements IManagerBusiness {
  private managerDatabase: IManagerDatabase;
  private hashManager: IHashManager;
  constructor(managerDatabase: IManagerDatabase, hashManager: IHashManager) {
    this.managerDatabase = managerDatabase;
    this.hashManager = hashManager;
  }

  async addManager(manager: ManagerInputDTO) {
    const { error } = ManagerSchema.validate(manager);

    if (error?.details[0].message) {
      throw new InvalidParameterError(error?.details[0].message);
    }

    const alreadyInDatabaseByEmail =
      await this.managerDatabase.getManagersByEmail(manager.email);

    if (alreadyInDatabaseByEmail.length !== 0) {
      throw new InvalidParameterError('Email already subscribed');
    }

    const alreadyInDatabaseByPhone =
      await this.managerDatabase.getManagersByPhone(manager.phone);

    if (alreadyInDatabaseByPhone.length !== 0) {
      throw new InvalidParameterError('Phone already subscribed');
    }

    const { password } = manager;

    const hashedPassword = await this.hashManager.hash(password);
    manager.password = hashedPassword as unknown as string;
    
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
