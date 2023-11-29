import { NextFunction, Request, RequestHandler, Response } from 'express';
import { userServices } from './user.service';
import sendResponse from '../../utilis/sendResponse';
import httpStatus from 'http-status';
const createStudentInContolar: RequestHandler = async (req, res, next) => {
  try {
    const { password, student: studentData } = req.body;

    //----------using zod validation---------

    // const zodParseData = studenZodValidationtSchema.parse(studentData);

    const result = await userServices.createStudentInToDB(
      password,
      studentData,
    );

    // res.status(200).json({
    //   success: true,
    //   message: 'Student created successfully',
    //   data: result,
    // });

    // use global response message from utilis

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'student created successfully !',
      data: result,
    });
  } catch (err) {
    // console.error(err);
    // res.status(500).json({
    //   success: false,
    //   message: 'Internal server error',
    // });

    // use global error handelar
    next(err);
  }
};

export const userContolar = {
  createStudentInContolar,
};
