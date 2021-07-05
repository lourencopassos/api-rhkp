import { CriterionEditDTO, CriterionInputDTO, CriterionModel } from '../model';
import { BaseDatabase } from '.';
import { Document } from 'mongoose';
import { ICriterionDatabase } from '../types/criterion';

export class CriterionDatabase
  extends BaseDatabase
  implements ICriterionDatabase
{
  public addCriterion = async (criterion: CriterionInputDTO): Promise<void> => {
    try {
      await this.getConnection();
      new CriterionModel(criterion).save();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getCriterionById = async (id: number): Promise<Document[]> => {
    try {
      await this.getConnection();
      return await CriterionModel.findById(id).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getCriterions = async (): Promise<Document[]> => {
    try {
      await this.getConnection();
      return await CriterionModel.find({}).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getCompanyCriterions = async (
    belongs_to: number
  ): Promise<Document[]> => {
    try {
      await this.getConnection();
      return await CriterionModel.find({ belongs_to }).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getCriterionByName = async (name: string): Promise<Document[]> => {
    try {
      await this.getConnection();
      return await CriterionModel.find({ name }).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public deleteCriterion = async (id: number) => {
    try {
      await this.getConnection();
      await CriterionModel.findByIdAndRemove(id).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public updateCriterion = async (criterion: CriterionEditDTO, id: number) => {
    try {
      await this.getConnection();
      await CriterionModel.findByIdAndUpdate(id, criterion).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };
}
