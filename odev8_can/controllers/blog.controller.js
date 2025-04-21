const blogService = require("../services/index");
const utils = require("../utils/index");
const baseResponse = require("../dto/index");
const { StatusCodes } = require("http-status-codes");

exports.createBlog = async (req, res) => {
  try {
    const data = await blogService.blogService.createBlog(req);

    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.CREATED,
        message: "Blog başarıyla oluşturuldu",
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

exports.deleteBlog = async (req, res) => {
  try {
    const data = await blogService.blogService.deleteBlog(req);

    res
      .json({
        ...baseResponse,
        data: null,
        code: StatusCodes.OK,
        message: "Blog başarıyla silindi",
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

exports.getAllBlogs = async (req, res) => {
  try {
    const data = await blogService.blogService.getAllBlogs(req);

    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Tüm bloglar listelendi",
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

exports.getBlogById = async (req, res) => {
  try {
    const data = await blogService.blogService.getBlogById(req);

    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Blog detayı getirildi",
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

exports.getBlogByTitle = async (req, res) => {
  try {
    const data = await blogService.blogService.getBlogByTitle(req);

    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Başlığa göre blog(lar) listelendi",
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

exports.getBlogsByAuthor = async (req, res) => {
  try {
    const data = await blogService.blogService.getBlogsByAuthor(req);

    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Yazara göre bloglar listelendi",
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

exports.getBlogsByStatus = async (req, res) => {
  try {
    const data = await blogService.blogService.getBlogsByStatus(req);

    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Statüye göre bloglar listelendi",
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

exports.updateBlogStatus = async (req, res) => {
  try {
    const data = await blogService.blogService.updateBlogStatus(req);

    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Blog durumu güncellendi",
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
