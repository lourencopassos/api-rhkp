import express from 'express';
import { QuantitativeEvaluationBusiness } from '../business';
import { QuantitativeEvaluationController } from '../controller';
import { QuantitativeEvaluationDatabase } from '../data';
import { HashManager } from '../utils/password-hash';

export const quantitativeEvaluationRouter = express.Router();

const database = new QuantitativeEvaluationDatabase();
const business = new QuantitativeEvaluationBusiness(database);
const controller = new QuantitativeEvaluationController(business);

quantitativeEvaluationRouter.post('/', controller.addEvaluation);
quantitativeEvaluationRouter.get(
  '/quantitative-evaluation/:id',
  controller.getEvaluationById
);
quantitativeEvaluationRouter.get(
  '/quantitative-evaluation/employee/:id',
  controller.getEvaluationsFromEmployeeById
);
quantitativeEvaluationRouter.get(
  '/quantitative-evaluation/manager/:id',
  controller.getEvaluationsFromManagerById
);
quantitativeEvaluationRouter.get(
  '/quantitative-evaluation/company/:id',
  controller.getCompanyEvaluations
);
quantitativeEvaluationRouter.patch(
  '/quantitative-evaluation/:id',
  controller.updateEvaluation
);
quantitativeEvaluationRouter.delete(
  '/quantitative-evaluation/:id',
  controller.deleteEvaluation
);
