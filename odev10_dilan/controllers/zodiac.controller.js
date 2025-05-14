const { StatusCodes } = require("http-status-codes");
const utils = require("../utils");
const services = require("../services");
const baseResponse = require("../dto/baseResponse.dto");

exports.createZodiac = async (req, res) => {
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

    const json = await services.zodiac.createZodiac(req);

    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      code: StatusCodes.CREATED,
      data: json,
      message: "Burç başarıyla oluşturuldu.",
      timestamp: new Date(),
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

exports.getAllZodiacs = async (req, res) => {
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
    const json = await services.zodiac.getAllZodiacs();

    res.status(StatusCodes.OK).json({
      ...baseResponse,
      code: StatusCodes.OK,
      data: json,
      message: "Tüm burçlar başarıyla getirildi.",
      timestamp: new Date(),
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

exports.getZodiacById = async (req, res) => {
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

    const json = await services.zodiac.getZodiacById(req);

    res.status(StatusCodes.OK).json({
      ...baseResponse,
      code: StatusCodes.OK,
      data: json,
      message: `Burç (${id}) başarıyla getirildi.`,
      timestamp: new Date(),
    });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({
      ...baseResponse,
      error: true,
      success: false,
      message: error.message,
      timestamp: new Date(),
      code: StatusCodes.NOT_FOUND,
    });
  }
};

exports.updateZodiac = async (req, res) => {
  try {
    const { id } = req.params;
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
    const json = await services.zodiac.updateZodiac(req);

    res.status(StatusCodes.OK).json({
      ...baseResponse,
      code: StatusCodes.OK,
      data: json,
      message: `Burç (${id}) başarıyla güncellendi.`,
      timestamp: new Date(),
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

exports.deleteZodiac = async (req, res) => {
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

    const json = await services.zodiac.deleteZodiac(req);

    res.status(StatusCodes.OK).json({
      ...baseResponse,
      code: StatusCodes.OK,
      data: json,
      message: `Burç (${id}) başarıyla silindi.`,
      timestamp: new Date(),
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
