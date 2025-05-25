const { StatusCodes } = require("http-status-codes");
const utils = require("../utils");
const services = require("../services");
const baseResponse = require("../dto/baseResponse.dto");

exports.createTarot = async (req, res) => {
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

    const json = await services.tarot.createTarot(req);
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      data: json,
      error: false,
      success: true,
      timestamp: new Date(),
      message: "Tarot kartı başarıyla oluşturuldu.",
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

exports.deleteTarot = async (req, res) => {
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

    const json = await services.tarot.deleteTarot(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      error: false,
      success: true,
      timestamp: new Date(),
      message: "Tarot kartı başarıyla silindi.",
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

exports.updateTarot = async (req, res) => {
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

    const json = await services.tarot.updateTarot(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      error: false,
      success: true,
      timestamp: new Date(),
      message: "Tarot kartı başarıyla güncellendi.",
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

exports.getAllTarot = async (req, res) => {
  try {
    const json = await services.tarot.getAllTarot(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      error: false,
      success: true,
      timestamp: new Date(),
      message: "Tüm tarot kartları getirildi.",
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

exports.getRandomTarot = async (req, res) => {
  try {
    const json = await services.tarot.randomTarot();
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      error: false,
      success: true,
      timestamp: new Date(),
      message: "Rastgele tarot kartı getirildi.",
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
