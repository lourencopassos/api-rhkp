import express from 'express';
import { EmployeeBusiness } from '../business';
import { EmployeeController } from '../controller';
import { EmployeeDatabase } from '../data';
import { Authenticator } from '../utils/authenticator';
import { HashManager } from '../utils/password-hash';

export const employeeRouter = express.Router();

const database = new EmployeeDatabase();
const hashManager = new HashManager();
const authenticator = new Authenticator();
const business = new EmployeeBusiness(database, hashManager, authenticator);
const controller = new EmployeeController(business);

employeeRouter.post('/', controller.addEmployee);
employeeRouter.post('/login', controller.login);
employeeRouter.get('/:id', controller.getEmployeeById);
employeeRouter.get('/company/:id', controller.getEmployeesFromCompany);
employeeRouter.get('/:email', controller.getEmployeeByEmail);
employeeRouter.get('/:cpf', controller.getEmployeeByCpf);
employeeRouter.get('/:name', controller.getEmployeeByName);
employeeRouter.patch('/:id', controller.updateEmployee);
employeeRouter.delete('/:id', controller.deleteEmployee);
