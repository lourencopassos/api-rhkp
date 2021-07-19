import { Document } from 'mongoose';
import {
  InvalidParameterError,
  MissingParameterError,
  NotFoundError
} from '../../error';
import {
  EmployeeCpfLoginInput,
  EmployeeEditDTO,
  EmployeeInputDTO,
  EmployeePhoneLoginInput
} from '../../model';
import { IEmployeeBusiness, IEmployeeDatabase } from '../../types/employee';
import { IAuthenticator, IHashManager } from '../../types/utils';
import { schema as EmployeeSchema } from './schema';

export class EmployeeBusiness implements IEmployeeBusiness {
  private database: IEmployeeDatabase;
  private hashManager: IHashManager;
  private authenticator: IAuthenticator;
  constructor(
    database: IEmployeeDatabase,
    hashManager: IHashManager,
    authenticator: IAuthenticator
  ) {
    this.database = database;
    this.hashManager = hashManager;
    this.authenticator = authenticator;
  }

  async addEmployee(employee: EmployeeInputDTO): Promise<string> {
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

    const { password, company_id, cpf } = employee;

    const hashedPassword = await this.hashManager.hash(password);
    employee.password = hashedPassword as unknown as string;

    await this.database.addEmployee(employee);

    return this.authenticator.generateTokenByCpf(
      { cpf, company_id },
      process.env.ACCESS_TOKEN_EXPIRES_IN!
    );
  }

  async login(
    loginData: EmployeeCpfLoginInput | EmployeePhoneLoginInput
  ): Promise<string> {
    
    if (!loginData) {
      throw new MissingParameterError('login data');
    }

    if ('cpf' in loginData) {
      const employee = await this.database.getEmployeeByCpf(loginData.cpf);

      if (!employee) {
        throw new NotFoundError();
      }
      const { cpf, company_id, password } = employee;

      await this.hashManager.compare(loginData.password, password);

      return this.authenticator.generateTokenByCpf(
        { cpf, company_id },
        process.env.ACCESS_TOKEN_EXPIRES_IN!
      );
    } else {
      const employee = await this.database.getEmployeeByCpf(loginData.phone);

      if (!employee) {
        throw new NotFoundError();
      }
      const { phone, company_id, password } = employee;

      await this.hashManager.compare(loginData.password, password);

      return this.authenticator.generateTokenByPhone(
        { phone, company_id },
        process.env.ACCESS_TOKEN_EXPIRES_IN!
      );
    }
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
