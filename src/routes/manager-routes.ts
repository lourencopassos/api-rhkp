import express from 'express';
import { ManagerBusiness } from '../business';
import { ManagerController } from '../controller/manager-controller';
import { ManagerDatabase } from '../data';

export const managerRouter = express.Router();

const database = new ManagerDatabase();
const business = new ManagerBusiness(database);
const controller = new ManagerController(business);

managerRouter.post('/', controller.addManager);
managerRouter.get('/:id', controller.getManagerById);
managerRouter.get('/', controller.getManagerByEmail);
managerRouter.patch('/:id', controller.updateManager);
managerRouter.delete('/:id', controller.deleteManager);
