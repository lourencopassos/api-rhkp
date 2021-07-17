import { Request, Response } from 'express';
import {
  CompanyEditDTO,
  CompanyInputDTO,
  QuantitativeEvaluationEditDTO,
  QuantitativeEvaluationInputDTO
} from '../model';
import {
  IQuantitativeEvaluationBusiness,
  IQuantitativeEvaluationController
} from '../types';

export class QuantitativeEvaluationController
  implements IQuantitativeEvaluationController
{
  private quantitativeEvaluationBusiness: IQuantitativeEvaluationBusiness;
  constructor(quantitativeEvaluationBusiness: IQuantitativeEvaluationBusiness) {
    this.quantitativeEvaluationBusiness = quantitativeEvaluationBusiness;
  }

  addEvaluation = async (req: Request, res: Response) => {
    try {
      const {
        evaluator_id,
        evaluee_id,
        self_ratings,
        manager_ratings,
        belongs_to
      } = req.body;

      const input: QuantitativeEvaluationInputDTO = {
        evaluator_id,
        evaluee_id,
        self_ratings,
        manager_ratings,
        belongs_to
      };

      await this.quantitativeEvaluationBusiness.addEvaluation(input);

      res.sendStatus(201);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  getEvaluationById = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      const evaluations =
        await this.quantitativeEvaluationBusiness.getEvaluationById(id);
      res.status(200).send(evaluations);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  getEvaluationsFromEmployeeById = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      const evaluations =
        await this.quantitativeEvaluationBusiness.getEvaluationsFromEmployeeById(
          id
        );
      res.status(200).send(evaluations);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  getEvaluationsFromManagerById = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      const evaluations =
        await this.quantitativeEvaluationBusiness.getEvaluationsFromManagerById(
          id
        );
      res.status(200).send(evaluations);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  getCompanyEvaluations = async (req: Request, res: Response) => {
    try {
      const belongs_to = Number(req.params.belongsTo);

      const evaluations =
        await this.quantitativeEvaluationBusiness.getEvaluationsFromManagerById(
          belongs_to
        );
      res.status(200).send(evaluations);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  deleteEvaluation = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      await this.quantitativeEvaluationBusiness.deleteEvaluation(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  updateEvaluation = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      const {
        evaluator_id,
        evaluee_id,
        self_ratings,
        manager_ratings,
        belongs_to
      } = req.body;

      const evaluationToUpdate: QuantitativeEvaluationEditDTO = {
        evaluator_id,
        evaluee_id,
        self_ratings,
        manager_ratings,
        belongs_to,
        updated_at: Date.now()
      };

      await this.quantitativeEvaluationBusiness.updateEvaluation(
        evaluationToUpdate,
        id
      );
      res.sendStatus(204);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };
}
