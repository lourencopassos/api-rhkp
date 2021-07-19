import { Request, Response } from 'express';
import { Document } from 'mongoose';
import {
  QualitativeEvaluationEditDTO,
  QualitativeEvaluationInputDTO
} from '../model';

export interface IQualitativeEvaluationDatabase {
  addEvaluation(evaluation: QualitativeEvaluationInputDTO): Promise<void>;
  getEvaluationById(id: number): Promise<Document[]>;
  getEvaluationsFromEmployeeById(id: number): Promise<Document[]>;
  getEvaluationsFromManagerById(id: number): Promise<Document[]>;
  getCompanyEvaluations(company_id: number): Promise<Document[]>;
  deleteEvaluation(id: number): Promise<void>;
  updateEvaluation(
    evaluation: QualitativeEvaluationEditDTO,
    id: number
  ): Promise<void>;
}

export interface IQualitativeEvaluationBusiness {
  addEvaluation(evaluation: QualitativeEvaluationInputDTO): Promise<void>;
  getEvaluationById(id: number): Promise<Document[]>;
  getEvaluationsFromEmployeeById(id: number): Promise<Document[]>;
  getEvaluationsFromManagerById(id: number): Promise<Document[]>;
  getCompanyEvaluations(company_id: number): Promise<Document[]>;
  deleteEvaluation(id: number): Promise<void>;
  updateEvaluation(
    evaluation: QualitativeEvaluationEditDTO,
    id: number
  ): Promise<void>;
}

export interface IQualitativeEvaluationController {
  addEvaluation(req: Request, res: Response): Promise<void>;
  getEvaluationById(req: Request, res: Response): Promise<void>;
  getEvaluationsFromEmployeeById(req: Request, res: Response): Promise<void>;
  getEvaluationsFromManagerById(req: Request, res: Response): Promise<void>;
  getCompanyEvaluations(req: Request, res: Response): Promise<void>;
  deleteEvaluation(req: Request, res: Response): Promise<void>;
  updateEvaluation(req: Request, res: Response): Promise<void>;
}
