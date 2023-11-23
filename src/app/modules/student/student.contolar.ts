import { Request, Response } from 'express';
import { studentService } from './student.services';

const getOneStudentInContolar = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getOneStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student one get successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getAllStudentsInContolar = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Student all get successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const createStudentInContolar = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    const result = await studentService.createStudentInToDB(studentData);

    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

export const studentContolar = {
  createStudentInContolar,
  getAllStudentsInContolar,
  getOneStudentInContolar,
};
