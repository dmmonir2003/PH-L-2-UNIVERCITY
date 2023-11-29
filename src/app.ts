import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import globalErrorHandeler from './app/middleware/globalErrorHandelar';
import notFound from './app/middleware/notFound';
import router from './app/routes';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// all application route

app.use('/api/v1', router);

const testRoute = (req: Request, res: Response) => {
  const tast = 'server is running';
  res.send(tast.toString());
};
app.get('/', testRoute);

// global error handel file
app.use(globalErrorHandeler);

// not found api handel
app.use(notFound);

export default app;
