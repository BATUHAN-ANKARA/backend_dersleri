const services = require("../services/index");
const utils = require("../utils/index");
const { StatusCodes } = require("http-status-codes");
const baseResponse = require("../dto/baseResponse.dto");

exports.createAttendance = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }

    const attendance = await services.attendance.create2Attendance(req);
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      code: StatusCodes.CREATED,
      data: attendance,
      message: "Katılım başarıyla oluşturuldu",
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

exports.deleteAttendance = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }

    const message = await services.attendance.deleteAttendance(req);
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

exports.getAttendancesByLecture = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }

    const attendances = await services.attendance.getAttendancesByLecture(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      code: StatusCodes.OK,
      data: attendances,
      message: "Dersin katılımları başarıyla getirildi",
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

exports.getAttendancesByStudent = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }

    const attendances = await services.attendance.getAttendancesByStudent(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      code: StatusCodes.OK,
      data: attendances,
      message: "Öğrencinin katılımları başarıyla getirildi",
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

exports.getAllAttendance = async (req, res) => {
  try {
    const attendances = await services.attendance.getAllAttendance();
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      code: StatusCodes.OK,
      data: attendances,
      message: "Tüm katılımlar başarıyla getirildi",
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
