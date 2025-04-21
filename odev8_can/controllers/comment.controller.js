const commentService = require("../services/index");
const utils = require("../utils/index");
const baseResponse = require("../dto/index");
const { StatusCodes } = require("http-status-codes");

exports.createComment = async (req, res) => {
  try {
    const data = await commentService.commentService.createComment(req);
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      data: data,
      message: "Yorum başarıyla oluşturuldu",
      code: StatusCodes.CREATED,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const data = await commentService.commentService.deleteComment(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: data,
      message: "Yorum başarıyla silindi",
      code: StatusCodes.OK,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.getAllComments = async (req, res) => {
  try {
    const data = await commentService.commentService.getAllComments();
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: data,
      message: "Tüm yorumlar listelendi",
      code: StatusCodes.OK,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.getCommentById = async (req, res) => {
  try {
    const data = await commentService.commentService.getCommentById(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: data,
      message: "Yorum getirildi",
      code: StatusCodes.OK,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.getCommentsByUser = async (req, res) => {
  try {
    const data = await commentService.commentService.getCommentsByUser(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: data,
      message: "Kullanıcının yorumları listelendi",
      code: StatusCodes.OK,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.getCommentsByProduct = async (req, res) => {
  try {
    const data = await commentService.commentService.getCommentsByProduct(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: data,
      message: "Ürüne ait yorumlar listelendi",
      code: StatusCodes.OK,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.getFeaturedComments = async (req, res) => {
  try {
    const data = await commentService.commentService.getFeaturedComments();
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: data,
      message: "Öne çıkarılan yorumlar listelendi",
      code: StatusCodes.OK,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.updateCommentStatus = async (req, res) => {
  try {
    const data = await commentService.commentService.updateCommentStatus(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: data,
      message: "Yorum statüsü güncellendi",
      code: StatusCodes.OK,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.updateCommentFeature = async (req, res) => {
  try {
    const data = await commentService.commentService.updateCommentFeature(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: data,
      message: "Yorum öne çıkarıldı/gizlendi",
      code: StatusCodes.OK,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
