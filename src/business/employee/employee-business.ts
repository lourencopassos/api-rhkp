import { Document } from 'mongoose';
import {
  InvalidParameterError,
  MissingParameterError,
  NotFoundError
} from '../../error';
import { EmployeeEditDTO, EmployeeInputDTO } from '../../model';
import { IEmployeeBusiness, IEmployeeDatabase } from '../../types/employee';
import { IHashManager } from '../../types/utils';
import { schema as EmployeeSchema } from './schema';

export class EmployeeBusiness implements IEmployeeBusiness {
  private database: IEmployeeDatabase;
  private hashManager: IHashManager;
  constructor(database: IEmployeeDatabase, hashManager: IHashManager) {
    this.database = database;
    this.hashManager = hashManager;
  }

  async addEmployee(employee: EmployeeInputDTO) {
    const { error } = EmployeeSchema.validate(employee);

    if (error?.details[0].message) {
      throw new InvalidParameterError(error?.details[0].message);
    }

    const alreadyInDatabaseByPhone = await this.database.getEmployeeByPhone(
      employee.phone
    );

    if (alreadyInDatabaseByPhone.length !== 0) {
      throw new InvalidParameterError('Phone already subscribed');
    }

    const { password } = employee;

    const hashedPassword = await this.hashManager.hash(password);
    employee.password = hashedPassword as unknown as string;

    await this.database.addEmployee(employee);
  }

  async getManagerById(id: string): Promise<Document> {
    if (!id) {
      throw new MissingParameterError('id');
    }

    const manager = await this.database.getEmployeeById(id);

    if (!manager) {
      throw new NotFoundError();
    }

    return manager;
  }

  async getEmployeeByEmail(email: string): Promise<Document> {
    if (!email) {
      throw new MissingParameterError('email');
    }

    const manager = await this.database.getEmployeeByEmail(email);

    if (!manager) {
      throw new NotFoundError();
    }

    return manager;
  }

  async getEmployeeByName(name: string): Promise<Document | Document[]> {
    if (!name) {
      throw new MissingParameterError('name');
    }

    const manager = await this.database.getEmployeeByName(name);

    if (!manager) {
      throw new NotFoundError();
    }

    return manager;
  }

  async deleteEmployee(id: string): Promise<void> {
    if (!id) {
      throw new MissingParameterError('id');
    }

    const manager = await this.database.getEmployeeById(id);

    if (!manager) {
      throw new NotFoundError();
    }

    await this.database.deleteEmployee(id);
  }

  async updateEmployee(manager: EmployeeEditDTO, id: string): Promise<void> {
    if (!id) {
      throw new MissingParameterError('id');
    }

    if (!manager) {
      throw new MissingParameterError('manager to update');
    }

    const managerToUpdate = await this.database.getEmployeeById(id);

    if (!managerToUpdate) {
      throw new NotFoundError();
    }

    await this.database.updateEmployee(manager, id);
  }
}
