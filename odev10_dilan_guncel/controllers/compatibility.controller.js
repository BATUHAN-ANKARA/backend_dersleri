const utils = require("../utils");
const services = require("../services");
const { StatusCodes } = require("http-status-codes");
const baseResponse = require("../dto/baseResponse.dto");

 
exports.createCompatibility = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        ...baseResponse,
        ...isInvalid,
        error: true,
        success: false,
        code: StatusCodes.BAD_REQUEST,
      });
    }

    const json = await services.compatibility.createCompatibility(req);
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      data: json,
      error: false,
      success: true,
      timestamp: new Date(),
      message: "Uyumluluk kaydı oluşturuldu.",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      error: true,
      success: false,
      message: error.message,
      timestamp: new Date(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.deleteCompatibilityById = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        ...baseResponse,
        ...isInvalid,
        error: true,
        success: false,
        code: StatusCodes.BAD_REQUEST,
      });
    }

    const json = await services.compatibility.deleteCompatibilityById(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      error: false,
      success: true,
      timestamp: new Date(),
      message: "Uyumluluk kaydı silindi.",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      error: true,
      success: false,
      message: error.message,
      timestamp: new Date(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.updateCompatibility = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        ...baseResponse,
        ...isInvalid,
        error: true,
        success: false,
        code: StatusCodes.BAD_REQUEST,
      });
    }

    const json = await services.compatibility.updateCompatibility(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      error: false,
      success: true,
      timestamp: new Date(),
      message: "Uyumluluk kaydı güncellendi.",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      error: true,
      success: false,
      message: error.message,
      timestamp: new Date(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.getAllCompatibility = async (req, res) => {
  try {
    const json = await services.compatibility.getAllCompatibility(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      error: false,
      success: true,
      timestamp: new Date(),
      message: "Tüm uyumluluk kayıtları getirildi.",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      error: true,
      success: false,
      message: error.message,
      timestamp: new Date(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.getCompatibilityBetween = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        ...baseResponse,
        ...isInvalid,
        error: true,
        success: false,
        code: StatusCodes.BAD_REQUEST,
      });
    }

    const json = await services.compatibility.getCompatibilityBetween(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      error: false,
      success: true,
      timestamp: new Date(),
      message: "Uyumluluk kaydı getirildi.",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      error: true,
      success: false,
      message: error.message,
      timestamp: new Date(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};