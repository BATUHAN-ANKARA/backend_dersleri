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

//Tüm ürünlerden fiyatı 1000den büyük olanlar
// $gt => 'den daha büyük $gt: 1000 (1000den daha büyük olanlar)

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

// exports.getProductsByFilter = async (req, res) => {
//   try {
//     const { val } = req.params;
//     const products = await Product.find({ name: { $eq: val } });
//     //$ne kullanımı -not equal- demek (buna eşit olmayanları filtreler)
//     res
//       .json({
//         ...baseResponse,
//         data: products,
//         code: StatusCodes.OK,
//         message: "Ürünler listelendi",
//       })
//       .status(StatusCodes.OK);
//   } catch (error) {
//     res
//       .json({
//         ...baseResponse,
//         success: false,
//         error: true,
//         message: error.message,
//         code: StatusCodes.INTERNAL_SERVER_ERROR,
//       })
//       .status(StatusCodes.INTERNAL_SERVER_ERROR);
//   }
// };

// exports.getProductsByFilter = async (req, res) => {
//   try {
//     const { val1, val2 } = req.params;
//     const products = await Product.find({ price: { $lte: val2, $gte: val1 } });
//     //eğer $gt ve $lt bir arada kullanılırsa aralık içerisindeki ürünler döner (kısaca range)
//     res
//       .json({
//         ...baseResponse,
//         data: products,
//         code: StatusCodes.OK,
//         message: "Ürünler listelendi",
//       })
//       .status(StatusCodes.OK);
//   } catch (error) {
//     res
//       .json({
//         ...baseResponse,
//         success: false,
//         error: true,
//         message: error.message,
//         code: StatusCodes.INTERNAL_SERVER_ERROR,
//       })
//       .status(StatusCodes.INTERNAL_SERVER_ERROR);
//   }
// };
