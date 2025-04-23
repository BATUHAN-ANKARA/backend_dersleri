const services = require("../services/index");
const utils = require("../utils/index");
const { StatusCodes } = require("http-status-codes");
const baseResponse = require("../dto/baseResponse.dto");



exports.createStudent = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }
    const student = await services.student.createStudent(req);
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      code: StatusCodes.CREATED,
      data: student,
      message: "Öğrenci başarıyla oluşturuldu",
      timestamp: new Date(),
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      message: error.message,
      timestamp: new Date(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};


exports.updateStudent = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }
    const student = await services.student.updateStudent(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      code: StatusCodes.OK,
      data: student,
      message: "Öğrenci başarıyla güncellendi",
      timestamp: new Date(),
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      message: error.message,
      timestamp: new Date(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};


exports.deleteStudent = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }
    const message = await services.student.deleteStudent(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      code: StatusCodes.OK,
      message,
      timestamp: new Date(),
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      message: error.message,
      timestamp: new Date(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};


exports.getAllStudents = async (req, res) => {
  try {
    const studentList = await services.student.getAllStudents();
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      code: StatusCodes.OK,
      data: studentList,
      message: "Tüm öğrenciler başarıyla getirildi",
      timestamp: new Date(),
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      message: error.message,
      timestamp: new Date(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};


exports.getStudentById = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }
    const student = await services.student.getStudentById(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      code: StatusCodes.OK,
      data: student,
      message: "Öğrenci başarıyla getirildi",
      timestamp: new Date(),
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      message: error.message,
      timestamp: new Date(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
