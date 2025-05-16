const services = require("../services/index");
const utils = require("../utils/index");
const { StatusCodes } = require("http-status-codes");
const baseResponse = require("../dto/baseResponse.dto");


exports.register = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }
    const json = await services.user.register(req);
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      code: StatusCodes.CREATED,
      data: json,
      message: "Kayıt başarılı",
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

exports.login = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }
    const json = await services.user.login(req);
    return res.status(StatusCodes.OK).json({
      ...baseResponse,
      code: StatusCodes.OK,
      data: json,
      message: "Giriş başarılı",
      timestamp: new Date(),
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      message: error.message,
      timestamp: new Date(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }
    const json = await services.user.updateUser(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      code: StatusCodes.OK,
      data: json,
      message: "Güncelleme başarılı",
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

exports.getAllUsers = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }
    const json = await services.user.getAllUsers(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      code: StatusCodes.OK,
      data: json,
      message: "Kullanıcılar listelendi",
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

exports.changePassword = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }
    const json = await services.user.changePassword(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      code: StatusCodes.OK,
      data: json,
      message: "Güncelleme başarılı",
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
