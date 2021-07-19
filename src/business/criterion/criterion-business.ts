import { Document } from 'mongoose';
import {
  InvalidParameterError,
  MissingParameterError,
  NotFoundError
} from '../../error';
import {
  CriterionEditDTO,
  CriterionInputDTO
} from '../../model';
import { ICriterionBusiness, ICriterionDatabase } from '../../types/criterion';
import { schema as CriterionSchema } from './schema';

export class CriterionBusiness implements ICriterionBusiness {
  private criterionDatabase: ICriterionDatabase;
  constructor(criterionDatabase: ICriterionDatabase) {
    this.criterionDatabase = criterionDatabase;
  }

  async addCriterion(criterion: CriterionInputDTO) {
    const { error } = CriterionSchema.validate(criterion);

    if (error?.details[0].message) {
      throw new InvalidParameterError(error?.details[0].message);
    }

    const alreadyInDatabaseByName =
      await this.criterionDatabase.getCriterionByName(criterion.name);

    if (alreadyInDatabaseByName.length !== 0) {
      throw new InvalidParameterError('Criterion already saved');
    }

    await this.criterionDatabase.addCriterion(criterion);
  }

  async getCriterionById(id: number): Promise<Document[]> {
    if (!id) {
      throw new MissingParameterError('id');
    }

    const criterion = await this.criterionDatabase.getCriterionById(id);

    if (!criterion) {
      throw new NotFoundError();
    }

    return criterion;
  }

  async getCriterions(): Promise<Document[]> {
    return this.criterionDatabase.getCriterions();
  }

  async deleteCriterion(id: number): Promise<void> {
    if (!id) {
      throw new MissingParameterError('id');
    }

    const criterion = await this.criterionDatabase.getCriterionById(id);

    if (!criterion) {
      throw new NotFoundError();
    }

    await this.criterionDatabase.deleteCriterion(id);
  }

  async getCompanyCriterions(company_id: number): Promise<Document[]> {
    if (!company_id) {
      throw new MissingParameterError('company_id id');
    }

    const criterion = await this.criterionDatabase.getCriterionById(company_id);

    if (!criterion) {
      throw new NotFoundError();
    }

    return this.criterionDatabase.getCompanyCriterions(company_id);
  }

  async updateCriterion(
    criterion: CriterionEditDTO,
    id: number
  ): Promise<void> {
    if (!id) {
      throw new MissingParameterError('id');
    }

    if (!criterion) {
      throw new MissingParameterError('criterion to update');
    }

    const criterionToUpdate = await this.criterionDatabase.getCriterionById(id);

    if (!criterionToUpdate) {
      throw new NotFoundError();
    }

    await this.criterionDatabase.updateCriterion(criterion, id);
  }
}
