import express from 'express';
import { QualitativeEvaluationBusiness } from '../business';
import { QualitativeEvaluationController } from '../controller';
import { QualitativeEvaluationDatabase } from '../data';

export const qualitativeEvaluationRouter = express.Router();

const database = new QualitativeEvaluationDatabase();
const business = new QualitativeEvaluationBusiness(database);
const controller = new QualitativeEvaluationController(business);

qualitativeEvaluationRouter.post('/', controller.addEvaluation);
qualitativeEvaluationRouter.get('/:id', controller.getEvaluationById);
qualitativeEvaluationRouter.get(
  '/employee/:id',
  controller.getEvaluationsFromEmployeeById
);
qualitativeEvaluationRouter.get(
  '/manager/:id',
  controller.getEvaluationsFromManagerById
);
qualitativeEvaluationRouter.get(
  'company/:id',
  controller.getCompanyEvaluations
);
qualitativeEvaluationRouter.patch('/:id', controller.updateEvaluation);
qualitativeEvaluationRouter.delete('/:id', controller.deleteEvaluation);
