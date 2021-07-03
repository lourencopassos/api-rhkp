import express from 'express';
import { EmployeeBusiness, ManagerBusiness } from '../business';
import { EmployeeController } from '../controller';
import { ManagerController } from '../controller/manager-controller';
import { EmployeeDatabase, ManagerDatabase } from '../data';
import { HashManager } from '../utils/password-hash';

export const employeeRouter = express.Router();

const database = new EmployeeDatabase();
const hashManager = new HashManager();
const business = new EmployeeBusiness(database, hashManager);
const controller = new EmployeeController(business);

employeeRouter.post('/', controller.addEmployee);
employeeRouter.get('/:id', controller.getEmployeeById);
employeeRouter.get('/company/:id', controller.getEmployeesFromCompany);
employeeRouter.get('/:email', controller.getEmployeeByEmail);
employeeRouter.get('/:cpf', controller.getEmployeeByCpf);
employeeRouter.get('/:name', controller.getEmployeeByName);
employeeRouter.patch('/:id', controller.updateEmployee);
employeeRouter.delete('/:id', controller.deleteEmployee);
