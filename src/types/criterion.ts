import { Request, Response } from 'express';
import { Document } from 'mongoose';
import { CriterionEditDTO, CriterionInputDTO } from '../model';

export interface ICriterionDatabase {
  addCriterion(criterion: CriterionInputDTO): Promise<void>;
  getCriterionById(id: number): Promise<Document[]>;
  getCriterions(): Promise<Document[]>;
  getCriterionByName(name: string): Promise<Document[]>;
  getCompanyCriterions(company_id: number): Promise<Document[]>;
  deleteCriterion(id: number): Promise<void>;
  updateCriterion(criterion: CriterionEditDTO, id: number): Promise<void>;
}

export interface ICriterionBusiness {
  addCriterion(criterion: CriterionInputDTO): Promise<void>;
  getCriterionById(id: number): Promise<Document[]>;
  getCriterions(): Promise<Document[]>;
  getCompanyCriterions(company_id: number): Promise<Document[]>;
  deleteCriterion(id: number): Promise<void>;
  updateCriterion(criterion: CriterionEditDTO, id: number): Promise<void>;
}

export interface ICriterionController {
  addCriterion(req: Request, res: Response): Promise<void>;
  getCriterionById(req: Request, res: Response): Promise<void>;
  getCriterions(req: Request, res: Response): Promise<void>;
  getCompanyCriterions(req: Request, res: Response): Promise<void>;
  deleteCriterion(req: Request, res: Response): Promise<void>;
  updateCriterion(req: Request, res: Response): Promise<void>;
}
