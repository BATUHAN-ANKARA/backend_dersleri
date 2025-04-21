const adminService = require("../services/index");
const utils = require("../utils/index");
const baseResponse = require("../dto/index");
const { StatusCodes } = require("http-status-codes");

exports.createAdmin = async (req, res) => {
  try {
    const data = await adminService.adminService.createAdmin(req);
    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.CREATED,
        message: "Admin başarıyla oluşturuldu",
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        success: false,
        error: true,
        message: error.message,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.loginAdmin = async (req, res) => {
  try {
    const data = await adminService.adminService.loginAdmin(req);

    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Giriş başarılı",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        success: false,
        error: true,
        message: error.message,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.changePassword = async (req, res) => {
  try {
    const data = await adminService.adminService.changePassword(req);

    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Şifre başarıyla değiştirildi",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        success: false,
        error: true,
        message: error.message,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const data = await adminService.adminService.updateStatus(req);

    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Admin durumu güncellendi",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        success: false,
        error: true,
        message: error.message,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getAllAdmins = async (req, res) => {
  try {
    const data = await adminService.adminService.getAllAdmins(req);

    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Tüm adminler listelendi",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        success: false,
        error: true,
        message: error.message,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getAdminById = async (req, res) => {
  try {
    const data = await adminService.adminService.getAdminById(req);

    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Admin bilgisi getirildi",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        success: false,
        error: true,
        message: error.message,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getAdminsByName = async (req, res) => {
  try {
    const data = await adminService.adminService.getAdminsByName(req);

    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "İsme göre admin(ler) listelendi",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        success: false,
        error: true,
        message: error.message,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getAdminsByStatus = async (req, res) => {
  try {
    const data = await adminService.adminService.getAdminsByStatus(req);

    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Statüye göre admin(ler) listelendi",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        success: false,
        error: true,
        message: error.message,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.deleteAdminById = async (req, res) => {
  try {
    const data = await adminService.adminService.deleteAdminById(req);

    res
      .json({
        ...baseResponse,
        data: null,
        code: StatusCodes.OK,
        message: "Admin başarıyla silindi",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        success: false,
        error: true,
        message: error.message,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
