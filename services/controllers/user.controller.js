const { StatusCodes } = require("http-status-codes");
const baseResponse = require("../dto/baseResponse.dto");
const userService = require("../services/index");

exports.register = async (req, res) => {
  try {
    const data = await userService.userService.register(req);
    res
      .json({
        ...baseResponse,
        data: data,
        timestamp: new Date(),
        message: "Kayıt başarılı",
        code: StatusCodes.CREATED,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        error: true,
        success: false,
        timestamp: new Date(),
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.login = async (req, res) => {
  try {
    const data = await userService.userService.login(req);
    res
      .json({
        ...baseResponse,
        data: data,
        timestamp: new Date(),
        message: "Giriş başarılı",
        code: StatusCodes.OK,
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        error: true,
        success: false,
        timestamp: new Date(),
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const data = await userService.userService.updateUser(req);
    res
      .json({
        ...baseResponse,
        data: data,
        timestamp: new Date(),
        message: "Güncelleme başarılı",
        code: StatusCodes.OK,
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        error: true,
        success: false,
        timestamp: new Date(),
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const data = await userService.userService.deleteUser(req);
    res
      .json({
        ...baseResponse,
        data: data,
        timestamp: new Date(),
        message: "Silme başarılı",
        code: StatusCodes.OK,
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        error: true,
        success: false,
        timestamp: new Date(),
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const data = await userService.userService.getAllUsers(req);
    res
      .json({
        ...baseResponse,
        data: data,
        timestamp: new Date(),
        message: "Kullanıcılar listelendi",
        code: StatusCodes.OK,
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        error: true,
        success: false,
        timestamp: new Date(),
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
