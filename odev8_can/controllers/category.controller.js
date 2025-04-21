const categoryService = require("../services/index");
const utils = require("../utils/index");
const baseResponse = require("../dto/index");
const { StatusCodes } = require("http-status-codes");

exports.createCategory = async (req, res) => {
  try {
    const data = await categoryService.categoryService.createCategory(req);

    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.CREATED,
        message: "Kategori oluşturuldu",
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

exports.deleteCategory = async (req, res) => {
  try {
    const data = await categoryService.categoryService.deleteCategory(req);

    res
      .json({
        ...baseResponse,
        data: null,
        code: StatusCodes.OK,
        message: "Kategori silindi",
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

exports.getAllCateories = async (req, res) => {
  try {
    const data = await categoryService.categoryService.getAllCateories(req);

    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Tüm kategoriler listelendi",
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

exports.getCategoryById = async (req, res) => {
  try {
    const data = await categoryService.categoryService.getCategoryById(req);

    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Kategori getirildi",
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

exports.getCategoriesByStatus = async (req, res) => {
  try {
    const data = await categoryService.categoryService.getCategoriesByStatus(
      req
    );

    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Statüye göre kategoriler listelendi",
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

exports.getFeaturedCategories = async (req, res) => {
  try {
    const data = await categoryService.categoryService.getFeaturedCategories(
      req
    );

    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Öne çıkan kategoriler listelendi",
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

exports.updateCategoryStatus = async (req, res) => {
  try {
    const data = await categoryService.categoryService.updateCategoryStatus(
      req
    );

    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Kategori durumu güncellendi",
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

exports.updateCategoryFeature = async (req, res) => {
  try {
    const data = await categoryService.categoryService.updateCategoryFeature(
      req
    );

    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Kategori öne çıkarılma durumu güncellendi",
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
