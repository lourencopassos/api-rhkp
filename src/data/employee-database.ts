import { EmployeeEditDTO, EmployeeInputDTO, EmployeeModel } from '../model';
import { BaseDatabase } from '.';
import { IEmployeeDatabase } from '../types/employee';
import { Document } from 'mongoose';

export class EmployeeDatabase extends BaseDatabase implements IEmployeeDatabase {
  public addEmployee = async (employee: EmployeeInputDTO): Promise<void> => {
    try {
      const { name, password, company_id, phone, photo, cpf, email } = employee;
      await this.getConnection();
      new EmployeeModel({
        name,
        password,
        company_id,
        phone,
        photo,
        cpf,
        email
      }).save();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getEmployeeById = async (id: string): Promise<Document[]> => {
    try {
      await this.getConnection();
      return await EmployeeModel.findById(id).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getEmployeesFromCompany = async (
    company_id: string
  ): Promise<Document[]> => {
    try {
      await this.getConnection();
      return await EmployeeModel.find({ company_id }).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getEmployeeByName = async (
    employeeName: string
  ): Promise<Document[]> => {
    try {
      await this.getConnection();
      return await EmployeeModel.find({
        name: { $regex: `.*${employeeName}.*`, $options: 'i' }
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getEmployeeByEmail = async (email: string): Promise <Document[]> => {
    try {
      await this.getConnection();
      return await EmployeeModel.find({ email }).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getEmployeeByCpf = async (
    cpf: string
  ): Promise<Document[]> => {
    try {
      await this.getConnection();
      return await EmployeeModel.find({ cpf }).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getEmployeeByPhone = async (phone: string): Promise<Document[]> => {
    try {
      await this.getConnection();
      return await EmployeeModel.find({ phone }).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public deleteEmployee = async (id: string): Promise<void> => {
    try {
      await this.getConnection();
      await EmployeeModel.findByIdAndRemove(id).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public updateEmployee = async (employee: EmployeeEditDTO, id: string): Promise<void> => {
    try {
      await this.getConnection();
      await EmployeeModel.findByIdAndUpdate(id, employee).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };
}
