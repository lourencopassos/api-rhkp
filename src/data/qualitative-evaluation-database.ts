import {
  QualitativeEvaluationEditDTO,
  QualitativeEvaluationInputDTO, QualitativeEvaluationModel
} from '../model';
import { BaseDatabase } from '.';
import { Document } from 'mongoose';
import { IQualitativeEvaluationDatabase } from '../types/qualitative-evaluation';

export class QualitativeEvaluationDatabase
  extends BaseDatabase
  implements IQualitativeEvaluationDatabase
{
  public addEvaluation = async (
    evaluation: QualitativeEvaluationInputDTO
  ): Promise<void> => {
    try {
      await this.getConnection();
      new QualitativeEvaluationModel(evaluation).save();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getEvaluationById = async (id: number): Promise<Document[]> => {
    try {
      await this.getConnection();
      return await QualitativeEvaluationModel.findById(id).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getEvaluationsFromEmployeeById = async (
    evaluee_id: number
  ): Promise<Document[]> => {
    try {
      await this.getConnection();
      return await QualitativeEvaluationModel.find({ evaluee_id }).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getEvaluationsFromManagerById = async (
    evaluator_id: number
  ): Promise<Document[]> => {
    try {
      await this.getConnection();
      return await QualitativeEvaluationModel.find({ evaluator_id }).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getCompanyEvaluations = async (
    company_id: number
  ): Promise<Document[]> => {
    try {
      await this.getConnection();
      return await QualitativeEvaluationModel.find({ company_id }).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public deleteEvaluation = async (id: number) => {
    try {
      await this.getConnection();
      await QualitativeEvaluationModel.findByIdAndRemove(id).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public updateEvaluation = async (
    evaluation: QualitativeEvaluationEditDTO,
    id: number
  ) => {
    try {
      await this.getConnection();
      await QualitativeEvaluationModel.findByIdAndUpdate(id, evaluation).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };
}
