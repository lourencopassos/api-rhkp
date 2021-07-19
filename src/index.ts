import dotenv from 'dotenv';
import { AddressInfo } from 'net';
import express from 'express';
import cors from 'cors';
import {
  managerRouter,
  employeeRouter,
  companyRouter,
  criterionRouter,
  quantitativeEvaluationRouter,
  qualitativeEvaluationRouter
} from './routes';

dotenv.config();
const app = express();
app.use(cors({ origin: true }));

app.use(express.json());

app.use(`/${process.env.API_VERSION}/manager`, managerRouter);
app.use(`/${process.env.API_VERSION}/employee`, employeeRouter);
app.use(`/${process.env.API_VERSION}/company`, companyRouter);
app.use(`/${process.env.API_VERSION}/criterion`, criterionRouter);
app.use(
  `/${process.env.API_VERSION}/quantitative-evaluation`,
  quantitativeEvaluationRouter
);
app.use(
  `/${process.env.API_VERSION}/qualitative-evaluation`,
  qualitativeEvaluationRouter
);

export const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});
