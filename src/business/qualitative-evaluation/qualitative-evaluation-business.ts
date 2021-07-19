import { Document } from 'mongoose';
import {
  InvalidParameterError,
  MissingParameterError,
  NotFoundError
} from '../../error';
import { QualitativeEvaluationEditDTO, QualitativeEvaluationInputDTO } from '../../model';
import {
  IQualitativeEvaluationBusiness,
  IQualitativeEvaluationDatabase
} from '../../types';
import {} from '../../types/quantitative-evaluation';
import { schema as QuantitativeEvaluationSchema } from './schema';

export class QualitativeEvaluationBusiness implements IQualitativeEvaluationBusiness {
  private qualitativeEvaluationDatabase: IQualitativeEvaluationDatabase;
  constructor(qualitativeEvaluationDatabase: IQualitativeEvaluationDatabase) {
    this.qualitativeEvaluationDatabase = qualitativeEvaluationDatabase;
  }

  async addEvaluation(evaluation: QualitativeEvaluationInputDTO) {
    const { error } = QuantitativeEvaluationSchema.validate(evaluation);

    if (error?.details[0].message) {
      throw new InvalidParameterError(error?.details[0].message);
    }

    await this.qualitativeEvaluationDatabase.addEvaluation(evaluation);
  }

  async getEvaluationById(id: number): Promise<Document[]> {
    if (!id) {
      throw new MissingParameterError('id');
    }

    const evaluation =
      await this.qualitativeEvaluationDatabase.getEvaluationById(id);

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
      await this.qualitativeEvaluationDatabase.getEvaluationsFromEmployeeById(
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
      await this.qualitativeEvaluationDatabase.getEvaluationsFromManagerById(
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
      await this.qualitativeEvaluationDatabase.getEvaluationsFromManagerById(
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
      await this.qualitativeEvaluationDatabase.getEvaluationById(id);

    if (!evaluation) {
      throw new NotFoundError();
    }

    await this.qualitativeEvaluationDatabase.deleteEvaluation(id);
  }

  async updateEvaluation(
    evaluation: QualitativeEvaluationEditDTO,
    id: number
  ): Promise<void> {
    if (!id) {
      throw new MissingParameterError('id');
    }

    if (!evaluation) {
      throw new MissingParameterError('evaluation to update');
    }

    const evaluationToUpdate =
      await this.qualitativeEvaluationDatabase.getEvaluationById(id);

    if (!evaluationToUpdate) {
      throw new NotFoundError();
    }

    await this.qualitativeEvaluationDatabase.updateEvaluation(evaluation, id);
  }
}
