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

  async getEmployeeById(id: string): Promise<Document[]> {
    if (!id) {
      throw new MissingParameterError('id');
    }

    const employee = await this.database.getEmployeeById(id);

    if (!employee) {
      throw new NotFoundError();
    }

    return employee;
  }
  
  async getEmployeesFromCompany(company_id: string): Promise<Document[]> {
    if (!company_id) {
      throw new MissingParameterError('company_id');
    }

    const employees = await this.database.getEmployeesFromCompany(company_id);

    return employees;
  }

  async getEmployeeByCpf(cpf: string): Promise<Document[]> {
    if (!cpf) {
      throw new MissingParameterError('cpf');
    }

    const employee = await this.database.getEmployeeByCpf(cpf);

    if (!employee) {
      throw new NotFoundError();
    }

    return employee;
  }

  async getEmployeeByEmail(email: string): Promise<Document[]> {
    if (!email) {
      throw new MissingParameterError('email');
    }

    const employee = await this.database.getEmployeeByEmail(email);

    if (!employee) {
      throw new NotFoundError();
    }

    return employee;
  }

  async getEmployeeByPhone(phone: string): Promise<Document[]> {
    if (!phone) {
      throw new MissingParameterError('phone');
    }

    const employee = await this.database.getEmployeeByPhone(phone);

    if (!employee) {
      throw new NotFoundError();
    }

    return employee;
  }

  async getEmployeeByName(name: string): Promise<Document[]> {
    if (!name) {
      throw new MissingParameterError('name');
    }

    const employee = await this.database.getEmployeeByName(name);

    if (!employee) {
      throw new NotFoundError();
    }

    return employee;
  }

  async deleteEmployee(id: string): Promise<void> {
    if (!id) {
      throw new MissingParameterError('id');
    }

    const employee = await this.database.getEmployeeById(id);

    if (!employee) {
      throw new NotFoundError();
    }

    await this.database.deleteEmployee(id);
  }

  async updateEmployee(employee: EmployeeEditDTO, id: string): Promise<void> {
    if (!id) {
      throw new MissingParameterError('id');
    }

    if (!employee) {
      throw new MissingParameterError('employee to update');
    }

    const employeeToUpdate = await this.database.getEmployeeById(id);

    if (!employeeToUpdate) {
      throw new NotFoundError();
    }

    await this.database.updateEmployee(employee, id);
  }
}
