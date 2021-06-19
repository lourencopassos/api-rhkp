import { Document } from 'mongoose';
import { ManagerEditDTO, ManagerInputDTO } from '../model';

export interface IManagerDatabase {
  addManager(manager: ManagerInputDTO): Promise<void>;
  getManagerById(id: string): Promise<Document>;
  getManagersByName(managerName: string): Promise<Document | Document[]>;
  deleteManager(id: string): Promise<void>;
  updateManager(manager: ManagerEditDTO, id: string): Promise<void>;
}

export interface IManagerBusiness {}
