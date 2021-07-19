import { Request, Response } from 'express';
import { Document } from 'mongoose';
import { ManagerEditDTO, ManagerInputDTO, ManagerLoginInput } from '../model';

export interface IManagerDatabase {
  addManager(manager: ManagerInputDTO): Promise<void>;
  getManagerById(id: string): Promise<Document>;
  getManagersByName(managerName: string): Promise<Document | Document[]>;
  getManagersByEmail(email: string): Promise<any>;
  getManagersByPhone(phone: string): Promise<any>;
  deleteManager(id: string): Promise<void>;
  updateManager(manager: ManagerEditDTO, id: string): Promise<void>;
}

export interface IManagerBusiness {
  addManager(manager: ManagerInputDTO): Promise<string>;
  login(loginData: ManagerLoginInput): Promise<string>;
  getManagerById(id: string): Promise<Document>;
  getManagerByName(managerName: string): Promise<Document | Document[]>;
  getManagerByEmail(email: string): Promise<Document>;
  deleteManager(id: string): Promise<void>;
  updateManager(manager: ManagerEditDTO, id: string): Promise<void>;
}

export interface IManagerController {
  addManager(req: Request, res: Response): Promise<void>;
  getManagerById(req: Request, res: Response): Promise<void>;
  getManagerByName(req: Request, res: Response): Promise<void>;
  getManagerByEmail(req: Request, res: Response): Promise<void>;
  deleteManager(req: Request, res: Response): Promise<void>;
  updateManager(req: Request, res: Response): Promise<void>;
}
