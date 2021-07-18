import { Request, Response } from 'express';
import {
  QualitativeEvaluationEditDTO,
  QualitativeEvaluationInputDTO
} from '../model';
import {
  IQualitativeEvaluationBusiness,
  IQualitativeEvaluationController
} from '../types';

export class QualitativeEvaluationController
  implements IQualitativeEvaluationController
{
  private qualitativeBusiness: IQualitativeEvaluationBusiness;
  constructor(qualitativeBusiness: IQualitativeEvaluationBusiness) {
    this.qualitativeBusiness = qualitativeBusiness;
  }

  addEvaluation = async (req: Request, res: Response) => {
    try {
      const { evaluator_id, evaluee_id, title, description, belongs_to } =
        req.body;

      const input: QualitativeEvaluationInputDTO = {
        evaluator_id,
        evaluee_id,
        title,
        description,
        belongs_to
      };

      await this.qualitativeBusiness.addEvaluation(input);

      res.sendStatus(201);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  getEvaluationById = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      const evaluations = await this.qualitativeBusiness.getEvaluationById(id);
      res.status(200).send(evaluations);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  getEvaluationsFromEmployeeById = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      const evaluations =
        await this.qualitativeBusiness.getEvaluationsFromEmployeeById(id);
      res.status(200).send(evaluations);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  getEvaluationsFromManagerById = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      const evaluations =
        await this.qualitativeBusiness.getEvaluationsFromManagerById(id);
      res.status(200).send(evaluations);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  getCompanyEvaluations = async (req: Request, res: Response) => {
    try {
      const belongs_to = Number(req.params.belongsTo);

      const evaluations =
        await this.qualitativeBusiness.getEvaluationsFromManagerById(
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

      await this.qualitativeBusiness.deleteEvaluation(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };

  updateEvaluation = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      const { evaluator_id, evaluee_id, title, description, belongs_to } =
        req.body;

      const evaluationToUpdate: QualitativeEvaluationEditDTO = {
        evaluator_id,
        evaluee_id,
        title,
        description,
        belongs_to,
        updated_at: Date.now()
      };

      await this.qualitativeBusiness.updateEvaluation(evaluationToUpdate, id);
      res.sendStatus(204);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  };
}
