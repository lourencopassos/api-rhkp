import { Document } from 'mongoose';
import {
  InvalidParameterError,
  MissingParameterError,
  NotFoundError
} from '../../error';
import { QuantitativeEvaluationEditDTO, QuantitativeEvaluationInputDTO } from '../../model';
import {
  IQuantitativeEvaluationBusiness,
  IQuantitativeEvaluationDatabase
} from '../../types/quantitative-evaluation';
import { schema as QuantitativeEvaluationSchema } from './schema';

export class QuantitativeEvaluationBusiness
  implements IQuantitativeEvaluationBusiness
{
  private quantitativeEvaluationDatabase: IQuantitativeEvaluationDatabase;
  constructor(quantitativeEvaluationDatabase: IQuantitativeEvaluationDatabase) {
    this.quantitativeEvaluationDatabase = quantitativeEvaluationDatabase;
  }

  async addEvaluation(evaluation: QuantitativeEvaluationInputDTO) {
    const { error } = QuantitativeEvaluationSchema.validate(evaluation);

    if (error?.details[0].message) {
      throw new InvalidParameterError(error?.details[0].message);
    }

    await this.quantitativeEvaluationDatabase.addEvaluation(evaluation);
  }

  async getEvaluationById(id: number): Promise<Document[]> {
    if (!id) {
      throw new MissingParameterError('id');
    }

    const evaluation =
      await this.quantitativeEvaluationDatabase.getEvaluationById(id);

    if (!evaluation) {
      throw new NotFoundError();
    }

    return evaluation;
  }

  async getEvaluationsFromEmployeeById(id: number): Promise<Document[]> {
    if (!id) {
      throw new MissingParameterError('id');
    }

    const evaluation =
      await this.quantitativeEvaluationDatabase.getEvaluationsFromEmployeeById(
        id
      );

    if (!evaluation) {
      throw new NotFoundError();
    }

    return evaluation;
  }

  async getEvaluationsFromManagerById(id: number): Promise<Document[]> {
    if (!id) {
      throw new MissingParameterError('id');
    }

    const evaluation =
      await this.quantitativeEvaluationDatabase.getEvaluationsFromManagerById(
        id
      );

    if (!evaluation) {
      throw new NotFoundError();
    }

    return evaluation;
  }

  async getCompanyEvaluations(company_id: number): Promise<Document[]> {
    if (!company_id) {
      throw new MissingParameterError('company_id');
    }

    const evaluation =
      await this.quantitativeEvaluationDatabase.getEvaluationsFromManagerById(
        company_id
      );

    if (!evaluation) {
      throw new NotFoundError();
    }

    return evaluation;
  }

  async deleteEvaluation(id: number): Promise<void> {
    if (!id) {
      throw new MissingParameterError('id');
    }

    const evaluation =
      await this.quantitativeEvaluationDatabase.getEvaluationById(id);

    if (!evaluation) {
      throw new NotFoundError();
    }

    await this.quantitativeEvaluationDatabase.deleteEvaluation(id);
  }

  async updateEvaluation(
    evaluation: QuantitativeEvaluationEditDTO,
    id: number
  ): Promise<void> {
    if (!id) {
      throw new MissingParameterError('id');
    }

    if (!evaluation) {
      throw new MissingParameterError('evaluation to update');
    }

    const evaluationToUpdate =
      await this.quantitativeEvaluationDatabase.getEvaluationById(id);

    if (!evaluationToUpdate) {
      throw new NotFoundError();
    }

    await this.quantitativeEvaluationDatabase.updateEvaluation(evaluation, id);
  }
}
