import { Response } from 'express';
import httpStatus from 'http-status';
type TResponseData<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  data: T;
};

const sendResponse = <T>(res: Response, data: TResponseData<T>) => {
  res.status(httpStatus.OK).json({
    success: data.success,
    message: data.message,
    data: data.data,
  });
};

export default sendResponse;
