import { Document } from 'mongoose';
import {
  InvalidParameterError,
  MissingParameterError,
  NotFoundError
} from '../../error';
import { CompanyEditDTO, CompanyInputDTO } from '../../model';
import { ICompanyBusiness, ICompanyDatabase } from '../../types';
import { schema as CompanySchema } from './schema';

export class CompanyBusiness implements ICompanyBusiness {
  private companyDatabase: ICompanyDatabase;
  constructor(companyDatabase: ICompanyDatabase) {
    this.companyDatabase = companyDatabase;
  }

  async addCompany(company: CompanyInputDTO) {
    const { error } = CompanySchema.validate(company);

    if (error?.details[0].message) {
      throw new InvalidParameterError(error?.details[0].message);
    }

    const alreadyInDatabaseByEmail =
      await this.companyDatabase.getCompanyByName(company.name);

    if (alreadyInDatabaseByEmail.length !== 0) {
      throw new InvalidParameterError('Company already subscribed');
    }
    await this.companyDatabase.addCompany(company);
  }

  async getCompanyById(id: string): Promise<Document[]> {
    if (!id) {
      throw new MissingParameterError('id');
    }

    const company = await this.companyDatabase.getCompanyById(id);

    if (!company) {
      throw new NotFoundError();
    }

    return company;
  }

  async getCompanies(): Promise<Document[]> {
    return this.companyDatabase.getCompanies();
  }

  async deleteCompany(id: string): Promise<void> {
    if (!id) {
      throw new MissingParameterError('id');
    }

    const company = await this.companyDatabase.getCompanyById(id);

    if (!company) {
      throw new NotFoundError();
    }

    await this.companyDatabase.deleteCompany(id);
  }

  async updateCompany(company: CompanyEditDTO, id: string): Promise<void> {
    if (!id) {
      throw new MissingParameterError('id');
    }

    if (!company) {
      throw new MissingParameterError('manager to update');
    }

    const companyToUpdate = await this.companyDatabase.getCompanyById(id);

    if (!companyToUpdate) {
      throw new NotFoundError();
    }

    await this.companyDatabase.updateCompany(company, id);
  }
}
