const { StatusCodes } = require("http-status-codes");
const Product = require("../model/product.model");
const baseResponse = require("../dto/baseResponse.dto");

//Ürün ekle
exports.createProduct = async (req, res) => {
  try {
    const { name, price, category, description, stock } = req.body;
    const product = new Product({
      name,
      price,
      category,
      description,
      stock,
    });
    await product.save();
    res
      .json({
        ...baseResponse,
        data: product,
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
    const products = await Product.find();
    res
      .json({
        ...baseResponse,
        data: products,
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
    const { val } = req.params;
    const products = await Product.find({ price: { $gte: val } });
    res
      .json({
        ...baseResponse,
        data: products,
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
    const { val } = req.params;
    const products = await Product.find({ price: { $lte: val } });
    res
      .json({
        ...baseResponse,
        data: products,
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
    const { val1, val2 } = req.params;
    const products = await Product.find({ price: { $gte: val1, $lte: val2 } });
    res
      .json({
        ...baseResponse,
        data: products,
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
    const products = await Product.find({ stock: { $exists: false } });
    res
      .json({
        ...baseResponse,
        data: products,
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
    const { val1, val2 } = req.params;
    const products = await Product.find({
      $or: [{ price: { $gte: val1 } }, { stock: { $gte: val2 } }],
    });
    res
      .json({
        ...baseResponse,
        data: products,
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
    const { val1, val2 } = req.params;
    const products = await Product.find({
      $or: [{ price: { $gte: val1, $lte: val2 } }, { stock: { $gte: val3 } }],
    });
    res
      .json({
        ...baseResponse,
        data: products,
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
    const { val1, val2, val3 } = req.params;
    const products = await Product.find({
      $and: [
        { price: { $gt: val1, $lte: val2 } },
        { stock: { $gte: val3 } },
        { description: { $exists: false } },
      ],
    });
    res
      .json({
        ...baseResponse,
        data: products,
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
    const { val } = req.params;
    const products = await Product.find({ name: { $ne: val } });
    res
      .json({
        ...baseResponse,
        data: products,
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
