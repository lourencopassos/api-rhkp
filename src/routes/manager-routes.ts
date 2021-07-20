import express from 'express';
import { ManagerBusiness } from '../business';
import { ManagerController } from '../controller/manager-controller';
import { ManagerDatabase } from '../data';
import { Authenticator } from '../utils/authenticator';
import { HashManager } from '../utils/password-hash';

export const managerRouter = express.Router();

const database = new ManagerDatabase();
const hashManager = new HashManager();
const authenticator = new Authenticator();
const business = new ManagerBusiness(database, hashManager, authenticator);
const controller = new ManagerController(business);

managerRouter.post('/', controller.addManager);
managerRouter.post('/login', controller.login);
managerRouter.get('/:id', controller.getManagerById);
managerRouter.get('/', controller.getManagerByEmail);
managerRouter.patch('/:id', controller.updateManager);
managerRouter.delete('/:id', controller.deleteManager);
