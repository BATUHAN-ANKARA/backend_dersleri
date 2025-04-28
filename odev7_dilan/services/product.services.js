const Product = require("../models/product.model");


exports.createProduct = async (req) => {
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

exports.sorgu1 = async (req) => {
  try {
    const { val } = req.params;
    const products = await Product.find({ price: { $gte: val } });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

exports.sorgu2 = async (req) => {
  try {
    const { val } = req.params;
    const products = await Product.find({ price: { $lte: val } });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};


exports.sorgu3 = async (req) => {
  try {
    const { val1, val2 } = req.params;
    const products = await Product.find({ price: { $gte: val1, $lte: val2 } });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

exports.sorgu4 = async () => {
  try {
    const products = await Product.find({ stock: { $exists: false } });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};


exports.sorgu5 = async (req) => {
  try {
    const { val1, val2 } = req.params;
    const products = await Product.find({
      $or: [{ price: { $gte: val1 } }, { stock: { $gte: val2 } }],
    });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};


exports.sorgu6 = async (req) => {
  try {
    const { val1, val2 } = req.params;
    const products = await Product.find({
      $or: [{ price: { $gte: val1, $lte: val2 } }, { stock: { $gte: val3 } }],
    });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};


exports.sorgu7 = async (req) => {
  try {
    const { val1, val2, val3 } = req.params;
    const products = await Product.find({
      $and: [
        { price: { $gt: val1, $lte: val2 } },
        { stock: { $gte: val3 } },
        { description: { $exists: false } },
      ],
    });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};


exports.sorgu8 = async (req) => {
  try {
    const { val } = req.params;
    const products = await Product.find({ name: { $ne: val } });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};


