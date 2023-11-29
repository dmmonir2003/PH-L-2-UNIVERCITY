import { NextFunction, Request, RequestHandler, Response } from 'express';
import { studentService } from './student.services';
import sendResponse from '../../utilis/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utilis/catchAsync';

// import createStudenZodValidationtSchema from './student.zod.validation';

// import studentValidationSchema from './student.validation';
// use catchAcsync higherOrder function

const getOneStudentInContolar = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentService.getOneStudentFromDB(studentId);
  //use global response function from utilis
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student fatched successfully !',
    data: result,
  });
});
// use catchAcsync higherOrder function
const deletedStudentInContolar = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentService.deletedStudentFromDB(studentId);

  //use global response function from utilis
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student deleted successfully !',
    data: result,
  });
});
// use catchAcsync higherOrder function
const getAllStudentsInContolar = catchAsync(async (req, res) => {
  const result = await studentService.getAllStudentsFromDB();
  //use global response function from utilis
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Students fatched successfully !',
    data: result,
  });
});

export const studentContolar = {
  getAllStudentsInContolar,
  getOneStudentInContolar,
  deletedStudentInContolar,
};
