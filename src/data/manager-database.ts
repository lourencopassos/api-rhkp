import { ManagerEditDTO, ManagerInputDTO, ManagerModel } from '../model';
import { BaseDatabase } from '.';
import { IManagerDatabase } from '../types/manager';
import { Document } from 'mongoose';

export class ManagerDatabase extends BaseDatabase implements IManagerDatabase {
  public addManager = async (manager: ManagerInputDTO): Promise<void> => {
    try {
      const { name, email, password, company_id, phone, photo } = manager;
      await this.getConnection();
      new ManagerModel(manager).save();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getManagerById = async (id: string): Promise<Document> => {
    try {
      await this.getConnection();
      return await ManagerModel.findById(id).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getManagersByName = async (
    managerName: string
  ): Promise<Document | Document[]> => {
    try {
      await this.getConnection();
      return await ManagerModel.find({
        name: { $regex: `.*${managerName}.*`, $options: 'i' }
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getManagersByEmail = async (email: string): Promise<Document> => {
    try {
      await this.getConnection();
      return await ManagerModel.find({
        email
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public deleteManager = async (id: string): Promise<void> => {
    try {
      await this.getConnection();
      await ManagerModel.findByIdAndRemove(id).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public updateManager = async (manager: ManagerEditDTO, id: string) => {
    try {
      await this.getConnection();
      await ManagerModel.findByIdAndUpdate(id, manager).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };
}
