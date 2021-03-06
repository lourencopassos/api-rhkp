import { Request, Response } from 'express';
import { Document } from 'mongoose';
import {
  QuantitativeEvaluationInputDTO,
  QuantitativeEvaluationEditDTO
} from '../model';

export interface IQuantitativeEvaluationDatabase {
  addEvaluation(evaluation: QuantitativeEvaluationInputDTO): Promise<void>;
  getEvaluationById(id: number): Promise<Document[]>;
  getEvaluationsFromEmployeeById(id: number): Promise<Document[]>;
  getEvaluationsFromManagerById(id: number): Promise<Document[]>;
  getCompanyEvaluations(company_id: number): Promise<Document[]>;
  deleteEvaluation(id: number): Promise<void>;
  updateEvaluation(
    evaluation: QuantitativeEvaluationEditDTO,
    id: number
  ): Promise<void>;
}

export interface IQuantitativeEvaluationBusiness {
  addEvaluation(evaluation: QuantitativeEvaluationInputDTO): Promise<void>;
  getEvaluationById(id: number): Promise<Document[]>;
  getEvaluationsFromEmployeeById(id: number): Promise<Document[]>;
  getEvaluationsFromManagerById(id: number): Promise<Document[]>;
  getCompanyEvaluations(company_id: number): Promise<Document[]>;
  deleteEvaluation(id: number): Promise<void>;
  updateEvaluation(
    evaluation: QuantitativeEvaluationEditDTO,
    id: number
  ): Promise<void>;
}

export interface IQuantitativeEvaluationController {
  addEvaluation(req: Request, res: Response): Promise<void>;
  getEvaluationById(req: Request, res: Response): Promise<void>;
  getEvaluationsFromEmployeeById(
    req: Request,
    res: Response
  ): Promise<void>;
  getEvaluationsFromManagerById(
    req: Request,
    res: Response
  ): Promise<void>;
  getCompanyEvaluations(req: Request, res: Response): Promise<void>;
  deleteEvaluation(req: Request, res: Response): Promise<void>;
  updateEvaluation(req: Request, res: Response): Promise<void>;
}
