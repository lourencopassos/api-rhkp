import { Document } from 'mongoose';
import {
  InvalidParameterError,
  MissingParameterError,
  NotFoundError
} from '../../error';
import {
  ManagerEditDTO,
  ManagerInputDTO,
  ManagerLoginInput
} from '../../model';
import { IManagerBusiness, IManagerDatabase } from '../../types';
import { IAuthenticator, IHashManager } from '../../types/utils';
import { schema as ManagerSchema } from './schema';

export class ManagerBusiness implements IManagerBusiness {
  private managerDatabase: IManagerDatabase;
  private hashManager: IHashManager;
  private authenticator: IAuthenticator;
  constructor(
    managerDatabase: IManagerDatabase,
    hashManager: IHashManager,
    authenticator: IAuthenticator
  ) {
    this.managerDatabase = managerDatabase;
    this.hashManager = hashManager;
    this.authenticator = authenticator;
  }

  async addManager(manager: ManagerInputDTO): Promise<string> {
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

    const { password, email, company_id, role } = manager;

    const hashedPassword = await this.hashManager.hash(password);
    manager.password = hashedPassword as unknown as string;

    await this.managerDatabase.addManager(manager);

    return this.authenticator.generateTokenByEmail(
      { email, company_id, role },
      process.env.ACCESS_TOKEN_EXPIRES_IN!
    );
  }

  async login(loginData: ManagerLoginInput): Promise<string> {
    if (!loginData) {
      throw new MissingParameterError('login data');
    }

    const manager = await this.managerDatabase.getManagersByEmail(
      loginData.email
    );

    if (!manager) {
      throw new NotFoundError();
    }

    const { company_id, email, password, role } = manager;

    await this.hashManager.compare(loginData.password, password);

    return this.authenticator.generateTokenByEmail(
      { email, company_id, role },
      process.env.ACCESS_TOKEN_EXPIRES_IN!
    );
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
