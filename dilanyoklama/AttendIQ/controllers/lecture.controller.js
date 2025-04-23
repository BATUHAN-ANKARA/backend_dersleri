const { StatusCodes } = require("http-status-codes");
const utils = require("../utils/index");
const services = require("../services"); 
const baseResponse = require("../dto/baseResponse.dto");



exports.createLecture = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }
    const lecture = await services.lecture.createLecture(req);
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      code: StatusCodes.CREATED,
      data: lecture,
      message: "Ders başarıyla oluşturuldu",
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

exports.attendLecture = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }
    const lecture = await services.lecture.attendLecture(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      code: StatusCodes.OK,
      data: lecture,
      message: "Öğrenci derse başarıyla katıldı",
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


exports.getAllLectures = async (req, res) => {
  try {
    const lectures = await services.lecture.getAllLectures();
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      code: StatusCodes.OK,
      data: lectures,
      message: "Tüm dersler başarıyla getirildi",
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


exports.getLecturesByTeacher = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }
    const lectures = await services.lecture.getLecturesByTeacher(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      code: StatusCodes.OK,
      data: lectures,
      message: "Öğretmenin dersleri başarıyla getirildi",
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


exports.deleteLectures = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }
    const message = await services.lecture.deleteLectures(req);
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
