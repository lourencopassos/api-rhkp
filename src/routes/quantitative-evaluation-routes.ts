import express from 'express';
import { QuantitativeEvaluationBusiness } from '../business';
import { QuantitativeEvaluationController } from '../controller';
import { QuantitativeEvaluationDatabase } from '../data';

export const quantitativeEvaluationRouter = express.Router();

const database = new QuantitativeEvaluationDatabase();
const business = new QuantitativeEvaluationBusiness(database);
const controller = new QuantitativeEvaluationController(business);

quantitativeEvaluationRouter.post('/', controller.addEvaluation);
quantitativeEvaluationRouter.get(
  '/:id',
  controller.getEvaluationById
);
quantitativeEvaluationRouter.get(
  '/employee/:id',
  controller.getEvaluationsFromEmployeeById
);
quantitativeEvaluationRouter.get(
  '/manager/:id',
  controller.getEvaluationsFromManagerById
);
quantitativeEvaluationRouter.get(
  'company/:id',
  controller.getCompanyEvaluations
);
quantitativeEvaluationRouter.patch(
  '/:id',
  controller.updateEvaluation
);
quantitativeEvaluationRouter.delete(
  '/:id',
  controller.deleteEvaluation
);
