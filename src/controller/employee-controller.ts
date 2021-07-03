import { Request, Response } from 'express';
import {
  EmployeeEditDTO,
  EmployeeInputDTO,
} from '../model';
import {
  IEmployeeBusiness,
  IEmployeeController,
} from '../types';

export class EmployeeController implements IEmployeeController {
  private employeeBusiness: IEmployeeBusiness;
  constructor(employeeBusiness: IEmployeeBusiness) {
    this.employeeBusiness = employeeBusiness;
  }

  addEmployee = async (req: Request, res: Response) => {
    try {
      const { name, email, company_id, password, phone, photo, cpf } = req.body;

      const input: EmployeeInputDTO = {
        name,
        email,
        company_id,
        password,
        phone,
        photo,
        cpf
      };

      await this.employeeBusiness.addEmployee(input);

      res.sendStatus(201);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  getEmployeeById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const employee = await this.employeeBusiness.getEmployeeById(id);
      res.status(200).send(employee);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  getEmployeesFromCompany = async (req: Request, res: Response) => {
    try {
      const company_id = req.params.companyId;

      const employees = await this.employeeBusiness.getEmployeesFromCompany(
        company_id
      );
      res.status(200).send(employees);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  getEmployeeByEmail = async (req: Request, res: Response) => {
    try {
      const email = req.body.email;

      const employee = await this.employeeBusiness.getEmployeeByEmail(email);
      res.status(200).send(employee);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  getEmployeeByName = async (req: Request, res: Response) => {
    try {
      const name = req.body.name;

      const employee = await this.employeeBusiness.getEmployeeByName(name);
      res.status(200).send(employee);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  getEmployeeByCpf = async (req: Request, res: Response) => {
    try {
      const cpf = req.body.cpf;

      const employee = await this.employeeBusiness.getEmployeeById(cpf);
      res.status(200).send(employee);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  deleteEmployee = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      await this.employeeBusiness.deleteEmployee(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  updateEmployee = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const { name, email, company_id, password, phone, photo } = req.body;

      const employeeToUpdate: EmployeeEditDTO = {
        name,
        email,
        password,
        phone,
        photo
      };

      await this.employeeBusiness.updateEmployee(employeeToUpdate, id);
      res.sendStatus(204);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };
}
