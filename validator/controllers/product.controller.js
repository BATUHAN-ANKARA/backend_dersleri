const { StatusCodes } = require("http-status-codes");
const baseResponse = require("../dto/baseResponse.dto");
const productService = require("../services/index");
const utils = require("../utils/index");

//Ürün ekle
exports.createProduct = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const data = await productService.productService.createProduct(req);
    res
      .json({
        ...baseResponse,
        data: data,
        code: StatusCodes.CREATED,
        message: "Ürün oluşturuldu",
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

//Tüm ürünleri listele
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

//sorgu1 (fiyatı  val değerinden büyük veya eşit olan ürünleri getir)
exports.sorgu1 = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
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

//sorgu2 (fiyatı  val değerinden küçük veya eşit olan ürünleri getir)
exports.sorgu2 = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
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

//sorgu3 (fiyatı  val1 değerinden küçük veya eşit val2 değerinden büyük veya eşit olan ürünleri getir)
exports.sorgu3 = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
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

//sorgu4 (stok bilgisi olmayan ürünleri getir)
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

//fiyatı val1den büyük eşit olan (veya) stok miktarı val2den fazla olanlar
exports.sorgu5 = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
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

//fiyatı val1den büyük eşit olan val2den küçük eşit olan (veya) stok miktarı val3den fazla olanlar
exports.sorgu6 = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
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

//fiyatı val1den büyük val2den küçük eşit olan ve description olmayan stok miktarı val3den büyük eşit olanlar
exports.sorgu7 = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
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

//ismi val olmayan ürünleri getir
exports.sorgu8 = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
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

//$in $nin $size $all
