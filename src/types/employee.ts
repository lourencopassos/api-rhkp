import { Request, Response } from 'express';
import { Document } from 'mongoose';
import {
  EmployeeCpfLoginInput,
  EmployeeEditDTO,
  EmployeeInputDTO,
  EmployeePhoneLoginInput
} from '../model';

export interface IEmployeeDatabase {
  addEmployee(manager: EmployeeInputDTO): Promise<void>;
  getEmployeeById(id: string): Promise<Document[]>;
  getEmployeeByName(managerName: string): Promise<Document[]>;
  getEmployeeByEmail(email: string): Promise<Document[]>;
  getEmployeeByPhone(phone: string): Promise<Document[]>;
  getEmployeeByCpf(cpf: string): Promise<any>;
  getEmployeesFromCompany(company_id: string): Promise<Document[]>;
  getEmployeeById(id: string): Promise<Document[]>;
  deleteEmployee(id: string): Promise<void>;
  updateEmployee(manager: EmployeeEditDTO, id: string): Promise<void>;
}

export interface IEmployeeBusiness {
  addEmployee(manager: EmployeeInputDTO): Promise<string>;
  getEmployeeByName(managerName: string): Promise<Document[]>;
  getEmployeesFromCompany(company_id: string): Promise<Document[]>;
  getEmployeeByEmail(email: string): Promise<Document[]>;
  getEmployeeById(id: string): Promise<Document[]>;
  login(
    loginData: EmployeeCpfLoginInput | EmployeePhoneLoginInput
  ): Promise<string>;
  getEmployeeByCpf(cpf: string): Promise<Document[]>;
  deleteEmployee(id: string): Promise<void>;
  updateEmployee(manager: EmployeeEditDTO, id: string): Promise<void>;
}

export interface IEmployeeController {
  addEmployee(req: Request, res: Response): Promise<void>;
  getEmployeeById(req: Request, res: Response): Promise<void>;
  getEmployeeByName(req: Request, res: Response): Promise<void>;
  getEmployeeByEmail(req: Request, res: Response): Promise<void>;
  getEmployeeByCpf(req: Request, res: Response): Promise<void>;
  getEmployeesFromCompany(req: Request, res: Response): Promise<void>;
  deleteEmployee(req: Request, res: Response): Promise<void>;
  updateEmployee(req: Request, res: Response): Promise<void>;
}
