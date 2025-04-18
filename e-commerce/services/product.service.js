const Product = require("../models/product.model");

exports.createProduct = async (req) => {
  try {
    const { name, price, stock, category, subCategory } = req.body;
    const existProduct = await Product.findOne({ name: name });
    if (existProduct) {
      throw new Error("Bu ürün zaten var");
    }
    const product = new Product({
      name,
      price,
      category,
      subCategory,
      stock,
    });
    await product.save();
    return product;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAllProducts = async (req) => {
  try {
    const products = await Product.find({ status: "active" });
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
    const product = await Product.find({ name: name, status: "active" });
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
      status: "active",
    });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getProductsBySubCategory = async (req) => {
  try {
    const { subCategory } = req.params;
    const products = await Product.find({
      subCategory: subCategory,
      status: "active",
    });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getProductsWithStock = async (req) => {
  try {
    const products = await Product.find({
      stock: { $gte: 1 },
      status: "active",
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
      $and: [
        { category: { $eq: category } },
        { stock: { $gte: 1 } },
        { status: { $eq: "active" } },
      ],
    });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getProductsWithStockSubCategory = async (req) => {
  try {
    const { subCategory } = req.params;
    const products = await Product.find({
      $and: [
        { subCategory: { $eq: subCategory } },
        { stock: { $gte: 1 } },
        { status: { $eq: "active" } },
      ],
    });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getProductsPriceGreater = async (req) => {
  try {
    const { val } = req.params;
    const products = await Product.find({
      $and: [
        { price: { $gte: val } },
        { stock: { $gte: 1 } },
        { status: { $eq: "active" } },
      ],
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
      $and: [
        { price: { $gte: val1, lte: val2 } },
        { stock: { $gte: 1 } },
        { status: { $eq: "active" } },
      ],
    });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};
