import { CompanyEditDTO, CompanyInputDTO, CompanyModel } from '../model';
import { BaseDatabase } from '.';
import { Document } from 'mongoose';

export class EmployeeDatabase extends BaseDatabase {
  public addCompany = async (company: CompanyInputDTO): Promise<void> => {
    try {
      const { name, logo } = company;
      await this.getConnection();
      new CompanyModel({
        name,
        logo
      }).save();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getCompanyById = async (id: string): Promise<Document[]> => {
    try {
      await this.getConnection();
      return await CompanyModel.findById(id).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getCompanies = async (): Promise<Document[]> => {
    try {
      await this.getConnection();
      return await CompanyModel.find({}).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getCompanyByName = async (name: string): Promise<Document[]> => {
    try {
      await this.getConnection();
      return await CompanyModel.find({name}).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public deleteCompany = async (id: string) => {
    try {
      await this.getConnection();
      await CompanyModel.findByIdAndRemove(id).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public updateCompany = async (company: CompanyEditDTO, id: string) => {
    try {
      await this.getConnection();
      await CompanyModel.findByIdAndUpdate(id, company).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };
}
