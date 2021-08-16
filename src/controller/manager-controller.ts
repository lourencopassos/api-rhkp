import { Request, Response } from 'express';
import { ManagerEditDTO, ManagerInputDTO, ManagerLoginInput } from '../model';
import { IManagerBusiness, IManagerController } from '../types';

export class ManagerController implements IManagerController {
  private managerBusiness: IManagerBusiness;
  constructor(managerBusiness: IManagerBusiness) {
    this.managerBusiness = managerBusiness;
  }

  addManager = async (req: Request, res: Response) => {
    try {
      const { name, email, company_id, password, phone, photo, role } = req.body;

      const input: ManagerInputDTO = {
        name,
        email,
        company_id,
        password,
        phone,
        photo,
        role
      };

      const token = await this.managerBusiness.addManager(input);
      res.status(201).send(token);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { password, email } = req.body;

      const loginData: ManagerLoginInput = {
        email,
        password
      };

      const token = await this.managerBusiness.login(loginData);
      res.status(201).send(token);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  getManagerById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const manager = await this.managerBusiness.getManagerById(id);
      res.status(200).send(manager);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  getManagerByEmail = async (req: Request, res: Response) => {
    try {
      const email = req.body.email;

      const manager = await this.managerBusiness.getManagerByEmail(email);
      res.status(200).send(manager);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  getManagerByName = async (req: Request, res: Response) => {
    try {
      const name = req.body.name;

      const manager = await this.managerBusiness.getManagerByName(name);
      res.status(200).send(manager);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  deleteManager = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      await this.managerBusiness.deleteManager(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  updateManager = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const { name, email, company_id, password, phone, photo } = req.body;

      const managerToUpdate: ManagerEditDTO = {
        name,
        email,
        password,
        phone,
        photo
      };

      await this.managerBusiness.updateManager(managerToUpdate, id);
      res.sendStatus(204);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };
}
