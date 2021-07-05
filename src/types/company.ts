import { Request, Response } from 'express';
import { Document } from 'mongoose';
import { CompanyEditDTO, CompanyInputDTO } from '../model';

export interface ICompanyDatabase {
  addCompany(manager: CompanyInputDTO): Promise<void>;
  getCompanyById(id: string): Promise<Document[]>;
  getCompanies(): Promise<Document[]>;
  getCompanyByName(name: string): Promise<Document[]>;
  deleteCompany(id: string): Promise<void>;
  updateCompany(manager: CompanyEditDTO, id: string): Promise<void>;
}

export interface ICompanyBusiness {
  addCompany(manager: CompanyInputDTO): Promise<void>;
  getCompanyById(id: string): Promise<Document[]>;
  getCompanies(): Promise<Document[]>;
  deleteCompany(id: string): Promise<void>;
  updateCompany(manager: CompanyEditDTO, id: string): Promise<void>;
}

export interface ICompanyController {
  addCompany(req: Request, res: Response): Promise<void>;
  getCompanyById(req: Request, res: Response): Promise<void>;
  getCompanies(req: Request, res: Response): Promise<void>;
  deleteCompany(req: Request, res: Response): Promise<void>;
  updateCompany(req: Request, res: Response): Promise<void>;
}
