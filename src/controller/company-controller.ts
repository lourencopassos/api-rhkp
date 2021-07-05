import { Request, Response } from 'express';
import { CompanyEditDTO, CompanyInputDTO } from '../model';
import { ICompanyController, ICompanyBusiness } from '../types';

export class CompanyController implements ICompanyController {
  private companyBusiness: ICompanyBusiness;
  constructor(companyBusiness: ICompanyBusiness) {
    this.companyBusiness = companyBusiness;
  }

  addCompany = async (req: Request, res: Response) => {
    try {
      const { name, logo } = req.body;

      const input: CompanyInputDTO = {
        name,
        logo
      };

      await this.companyBusiness.addCompany(input);

      res.sendStatus(201);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  getCompanyById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const company = await this.companyBusiness.getCompanyById(id);
      res.status(200).send(company);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  getCompanies = async (req: Request, res: Response) => {
    try {
      const companies = await this.companyBusiness.getCompanies();
      res.status(200).send(companies);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  deleteCompany = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      await this.companyBusiness.deleteCompany(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  updateCompany = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const { name, logo } = req.body;

      const companyToUpdate: CompanyEditDTO = {
        name,
        logo
      };

      await this.companyBusiness.updateCompany(companyToUpdate, id);
      res.sendStatus(204);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };
}
