const { StatusCodes } = require("http-status-codes");
const baseResponse = require("../dto/baseResponse.dto");
const productService = require("../services/index");


exports.createProduct = async (req, res) => {
  try {
    const data = await productService.productService.createProduct(req);
    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.CREATED,
        message: "Ürün başarıyla oluşturuldu",
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

exports.getAllProducts = async (req, res) => {
  try {
    const data = await productService.productService.getAllProducts();
    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Ürünler listelendi",
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


exports.sorgu1 = async (req, res) => {
  try {
    const data = await productService.productService.sorgu1(req);
    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Ürünler listelendi",
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


exports.sorgu2 = async (req, res) => {
  try {
    const data = await productService.productService.sorgu2(req);
    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Ürünler listelendi",
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


exports.sorgu3 = async (req, res) => {
  try {
    const data = await productService.productService.sorgu3(req);
    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Ürünler listelendi",
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


exports.sorgu4 = async (req, res) => {
  try {
    const data = await productService.productService.sorgu4();
    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Ürünler listelendi",
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


exports.sorgu5 = async (req, res) => {
  try {
    const data = await productService.productService.sorgu5(req);
    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Ürünler listelendi",
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

exports.sorgu6 = async (req, res) => {
  try {
    const data = await productService.productService.sorgu6(req);
    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Ürünler listelendi",
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


exports.sorgu7 = async (req, res) => {
  try {
    const data = await productService.productService.sorgu7(req);
    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Ürünler listelendi",
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


exports.sorgu8 = async (req, res) => {
  try {
    const data = await productService.productService.sorgu8(req);
    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.OK,
        message: "Ürünler listelendi",
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

