import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoute } from './app/modules/student/student.route';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// all application route

app.use('/api/v1/students', StudentRoute);

const getTestRouteCall = (req: Request, res: Response) => {
  const tast = 'server is running';
  res.send(tast.toString());
};
app.get('/', getTestRouteCall);

export default app;
