import express from 'express';
import { CompanyBusiness } from '../business';
import { CompanyController } from '../controller';
import { CompanyDatabase } from '../data';

export const companyRouter = express.Router();

const database = new CompanyDatabase();
const business = new CompanyBusiness(database);
const controller = new CompanyController(business);

companyRouter.post('/', controller.addCompany);
companyRouter.get('/:id', controller.getCompanyById);
companyRouter.get('/', controller.getCompanies);
companyRouter.patch('/:id', controller.updateCompany);
companyRouter.delete('/:id', controller.deleteCompany);
