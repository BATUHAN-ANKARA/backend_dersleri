const { StatusCodes } = require("http-status-codes");
const Product = require("../model/user.model");
const baseResponse = require("../dto/baseResponse.dto");
const utils = require("../utils/helper");

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
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      data: product,
      code: StatusCodes.CREATED,
      timestamp: new Date(),
      message: "Ürün oluşturuldu",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      succes: false,
      error: true,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      timestamp: new Date(),
      message: error.message,
    });
  }
};

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

exports.getProductsByPriceGreater = async (req, res) => {
  try {
    const { value } = req.params;
    const products = await Product.find({ price: { $gt: value } });
    //eğer $gte olsaydı büyük veya eşit mi diye soracaktı
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

exports.getProductsByFilter = async (req, res) => {
  try {
    //fiyatı val1den büyük olan ve stok miktarı val2den büyük olan
    // const { val } = req.params;
    const products = await Product.find({ stock: { $exists: false } });
    // $exixsts true var mı diye false yok mu diye sorgular
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
exports.sorgu4 = async (req, res) => {
  try {
    const { name , val1, val2 } = req.params;
    const products = await Product.find({
      $and: [
        {name:{$eq:name}},
        {price: { $gt: val1, $lte: val2 } },
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
exports.sorgu5 = async (req, res) => {
  try {
    const { name, val1, val2 } = req.params;
    const products = await Product.find({
      $and: [
        { stock: { $exists: true } },
        { name: {$eq:name} },
        { price: { $gt: val1, $lte: val2 } },
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
exports.sorgu6 = async (req, res) => {
  try {
    const { name, val1, val2 } = req.params;
    const products = await Product.find({
      $or: [
        { stock: { $exists: true } },
        { name: {$eq:name} },
        { price: { $gt: val1, $lte: val2 } },
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
exports.sorgu7 = async (req, res) => {
  try {
    const { val1, val2, val3 } = req.params;
    const products = await Product.find({
      $and: [
        { description: { $exists: false } },
        { stock: { $gte: val1 , $lte:val2} },
        { price: { $gt: val3 } },
        { name:{$exists : true}}
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
