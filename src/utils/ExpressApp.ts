// src/utils/expressApp.ts
import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

export const createExpressApp = (): Express => {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());

  return app;
};
