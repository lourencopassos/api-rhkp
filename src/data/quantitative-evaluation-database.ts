import { QuantitativeEvaluationModel, QuantitativeEvaluationInputDTO, QuantitativeEvaluationEditDTO } from '../model';
import { BaseDatabase } from '.';
import { Document } from 'mongoose';
import { IQuantitativeEvaluationDatabase } from '../types/quantitative-evaluation';

export class QuantitativeEvaluationDatabase
  extends BaseDatabase
  implements IQuantitativeEvaluationDatabase
{
  public addEvaluation = async (
    evaluation: QuantitativeEvaluationInputDTO
  ): Promise<void> => {
    try {
      await this.getConnection();
      new QuantitativeEvaluationModel(evaluation).save();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getEvaluationById = async (id: number): Promise<Document[]> => {
    try {
      await this.getConnection();
      return await QuantitativeEvaluationModel.findById(id).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getEvaluationsFromEmployeeById = async (
    evaluee_id: number
  ): Promise<Document[]> => {
    try {
      await this.getConnection();
      return await QuantitativeEvaluationModel.find({ evaluee_id }).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getEvaluationsFromManagerById = async (
    evaluator_id: number
  ): Promise<Document[]> => {
    try {
      await this.getConnection();
      return await QuantitativeEvaluationModel.find({ evaluator_id }).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getCompanyEvaluations = async (
    belongs_to: number
  ): Promise<Document[]> => {
    try {
      await this.getConnection();
      return await QuantitativeEvaluationModel.find({ belongs_to }).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public deleteEvaluation = async (id: number) => {
    try {
      await this.getConnection();
      await QuantitativeEvaluationModel.findByIdAndRemove(id).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public updateEvaluation = async (
    evaluation: QuantitativeEvaluationEditDTO,
    id: number
  ) => {
    try {
      await this.getConnection();
      await QuantitativeEvaluationModel.findByIdAndUpdate(
        id,
        evaluation
      ).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };
}
