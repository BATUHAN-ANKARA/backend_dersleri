const Product = require("../models/product.model");

exports.createProduct = async (req) => {
  try {
    const { name, price, stock, category, description } = req.body;
    const existProduct = await Product.findOne({ name: name });
    if (existProduct) {
      throw new Error("Bu ürün zaten var");
    }
    const product = new Product({
      name,
      price,
      category,
      description,
      stock,
    });
    await product.save();
    return product;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAllProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getProductById = async (req) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getProductByName = async (req) => {
  try {
    const { name } = req.params;
    const product = await Product.find({ name: name });
    return product;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getProductsByCategory = async (req) => {
  try {
    const { category } = req.params;
    const products = await Product.find({
      category: category,
    });
    if (!products.length) {
      throw new Error("Geçersiz kategori ID'si");
    }
    return products;
  } catch (error) {
    throw new Error(error);
  }
};
exports.getProductsWithStock = async () => {
  try {
    const products = await Product.find({
      stock: { $gte: 1 },
    });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getProductsWithStockCategory = async (req) => {
  try {
    const { category } = req.params;
    const products = await Product.find({
      $and: [{ category: { $eq: category } }, { stock: { $gte: 1 } }],
    });
    if (!products.length) {
      throw new Error("Geçersiz kategori ID'si");
    }
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getProductsPriceGreater = async (req) => {
  try {
    const { val } = req.params;
    const products = await Product.find({
      $and: [{ price: { $gte: val } }, { stock: { $gte: 1 } }],
    });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getProductsPriceRange = async (req) => {
  try {
    const { val1, val2 } = req.params;
    const products = await Product.find({
      $and: [{ price: { $gte: val1, $lte: val2 } }, { stock: { $gte: 1 } }],
    });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};
