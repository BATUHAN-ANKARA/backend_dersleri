const { StatusCodes } = require("http-status-codes");
const baseResponse = require("../dto/baseResponse.dto");
const userService = require("../services/index");

exports.register = async (req, res) => {
  try {
    const data = await userService.userService.register(req);
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      data: data,
      timestamp: new Date(),
      message: "Kayıt başarılı",
      code: StatusCodes.CREATED,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      error: true,
      success: false,
      timestamp: new Date(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const data = await userService.userService.login(req);
    res.status(StatusCodes.OK)
      .json({
        ...baseResponse,
        data: data,
        timestamp: new Date(),
        message: "Giriş başarılı",
        code: StatusCodes.OK,
      })
      
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        ...baseResponse,
        error: true,
        success: false,
        timestamp: new Date(),
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
      
  }
};

exports.updateUser = async (req, res) => {
  try {
    const data = await userService.userService.updateUser(req);
    res.status(StatusCodes.OK)
      .json({
        ...baseResponse,
        data: data,
        timestamp: new Date(),
        message: "Güncelleme başarılı",
        code: StatusCodes.OK,
      })
      
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        ...baseResponse,
        error: true,
        success: false,
        timestamp: new Date(),
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
      
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const data = await userService.userService.deleteUser(req);
    res.status(StatusCodes.OK)
      .json({
        ...baseResponse,
        data: data,
        timestamp: new Date(),
        message: "Silme başarılı",
        code: StatusCodes.OK,
      })
      
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        ...baseResponse,
        error: true,
        success: false,
        timestamp: new Date(),
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
      
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const data = await userService.userService.getAllUsers(req);
    res.status(StatusCodes.OK)
      .json({
        ...baseResponse,
        data: data,
        timestamp: new Date(),
        message: "Kullanıcılar listelendi",
        code: StatusCodes.OK,
      })
      
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        ...baseResponse,
        error: true,
        success: false,
        timestamp: new Date(),
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
      
  }
};

exports.sorgu1 = async (req, res) => {
  try {
    const data = await userService.userService.sorgu1(req);
    res.status(StatusCodes.OK).json({
      data:data,
      timestamp: new Date(),
      message: "Sorgu 1 sonuçları",
      code: StatusCodes.OK,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message,
      success: false,
      error: true,
      timestamp: new Date(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.sorgu2 = async (req, res) => {
  try {
    const data = await userService.userService.sorgu2(req);
    res.status(StatusCodes.OK).json({
      data:data,
      timestamp: new Date(),
      message: "Sorgu 2 sonuçları",
      code: StatusCodes.OK,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message,
      success: false,
      error: true,
      timestamp: new Date(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.sorgu3 = async (req, res) => {
  try {
    const data = await userService.userService.sorgu3(req);
    res.status(StatusCodes.OK).json({
      data:data,
      timestamp: new Date(),
      message: "Sorgu 3 sonuçları",
      code: StatusCodes.OK,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message,
      success: false,
      error: true,
      timestamp: new Date(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.sorgu4 = async (req, res) => {
  try {
    const data = await userService.userService.sorgu4(req);
    res.status(StatusCodes.OK).json({
      data:data,
      timestamp: new Date(),
      message: "Sorgu 4 sonuçları",
      code: StatusCodes.OK,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message,
      success: false,
      error: true,
      timestamp: new Date(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};