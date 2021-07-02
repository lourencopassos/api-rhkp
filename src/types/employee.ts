import { Request, Response } from 'express';
import { Document } from 'mongoose';
import { EmployeeEditDTO, EmployeeInputDTO, ManagerEditDTO, ManagerInputDTO } from '../model';

export interface IEmployeeDatabase {
  addEmployee(manager: EmployeeInputDTO): Promise<void>;
  getEmployeeById(id: string): Promise<Document>;
  getEmployeeByName(managerName: string): Promise<Document | Document[]>;
  getEmployeeByEmail(email: string): Promise<any>;
  getEmployeeByPhone(phone: string): Promise<any>;
  deleteEmployee(id: string): Promise<void>;
  updateEmployee(manager: EmployeeEditDTO, id: string): Promise<void>;
}

export interface IEmployeeBusiness {
  addEmployee(manager: EmployeeInputDTO): Promise<void>;
  getEmployeeByName(managerName: string): Promise<Document | Document[]>;
  getEmployeeByEmail(email: string): Promise<any>;
  deleteEmployee(id: string): Promise<void>;
  updateEmployee(manager: EmployeeEditDTO, id: string): Promise<void>;
}

export interface IEmployeeController {
  addEmployee(req: Request, res: Response): Promise<void>;
  getEmployeeById(req: Request, res: Response): Promise<void>;
  getEmployeeByName(req: Request, res: Response): Promise<void>;
  getEmployeeByEmail(req: Request, res: Response): Promise<void>;
  deleteEmployee(req: Request, res: Response): Promise<void>;
  updateEmployee(req: Request, res: Response): Promise<void>;
}
