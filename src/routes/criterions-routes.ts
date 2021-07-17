import express from 'express';
import { CriterionBusiness } from '../business';
import { CriterionController } from '../controller';
import { CriterionDatabase } from '../data';

export const criterionRouter = express.Router();

const database = new CriterionDatabase();
const business = new CriterionBusiness(database);
const controller = new CriterionController(business);

criterionRouter.post('/', controller.addCriterion);
criterionRouter.get('/:id', controller.getCriterionById);
criterionRouter.get('/', controller.getCriterions);
criterionRouter.get('/company/:id', controller.getCompanyCriterions);
criterionRouter.patch('/:id', controller.deleteCriterion);
criterionRouter.delete('/:id', controller.updateCriterion);
