import { Request, Response } from 'express';
import {
  CriterionEditDTO,
  CriterionInputDTO,
  ManagerEditDTO,
  ManagerInputDTO
} from '../model';
import {
  ICriterionBusiness,
  ICriterionController,
  IManagerBusiness,
  IManagerController
} from '../types';

export class CriterionController implements ICriterionController {
  private criterionBusiness: ICriterionBusiness;
  constructor(criterionBusiness: ICriterionBusiness) {
    this.criterionBusiness = criterionBusiness;
  }

  addCriterion = async (req: Request, res: Response) => {
    try {
      const { name, company_id } = req.body;

      const input: CriterionInputDTO = {
        name,
        company_id
      };

      await this.criterionBusiness.addCriterion(input);

      res.sendStatus(201);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  getCriterionById = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      const criterion = await this.criterionBusiness.getCriterionById(id);
      res.status(200).send(criterion);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  getCriterions = async (req: Request, res: Response) => {
    try {
      const criterions = await this.criterionBusiness.getCriterions();
      res.status(200).send(criterions);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  getCompanyCriterions = async (req: Request, res: Response) => {
    try {
      const company_id = Number(req.body.company_id);

      const criterions = await this.criterionBusiness.getCompanyCriterions(
        company_id
      );
      res.status(200).send(criterions);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  deleteCriterion = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      await this.criterionBusiness.deleteCriterion(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  updateCriterion = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      const { name, company_id } = req.body;

      const criterionToUpdate: CriterionEditDTO = {
        name,
        company_id
      };

      await this.criterionBusiness.updateCriterion(criterionToUpdate, id);
      res.sendStatus(204);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };
}
