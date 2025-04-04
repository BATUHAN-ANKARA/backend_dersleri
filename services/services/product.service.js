const Product = require("../models/product.model");

//Ürün ekle
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

//Tüm ürünleri listele
exports.getAllProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

//sorgu1 (fiyatı  val değerinden büyük veya eşit olan ürünleri getir)
exports.sorgu1 = async (req) => {
  try {
    const { val } = req.params;
    const products = await Product.find({ price: { $gte: val } });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

//sorgu2 (fiyatı  val değerinden küçük veya eşit olan ürünleri getir)
exports.sorgu2 = async (req) => {
  try {
    const { val } = req.params;
    const products = await Product.find({ price: { $lte: val } });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

//sorgu3 (fiyatı  val1 değerinden küçük veya eşit val2 değerinden büyük veya eşit olan ürünleri getir)
exports.sorgu3 = async (req) => {
  try {
    const { val1, val2 } = req.params;
    const products = await Product.find({ price: { $gte: val1, $lte: val2 } });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

//sorgu4 (stok bilgisi olmayan ürünleri getir)
exports.sorgu4 = async () => {
  try {
    const products = await Product.find({ stock: { $exists: false } });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

//fiyatı val1den büyük eşit olan (veya) stok miktarı val2den fazla olanlar
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

//fiyatı val1den büyük eşit olan val2den küçük eşit olan (veya) stok miktarı val3den fazla olanlar
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

//fiyatı val1den büyük val2den küçük eşit olan ve description olmayan stok miktarı val3den büyük eşit olanlar
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

//ismi val olmayan ürünleri getir
exports.sorgu8 = async (req) => {
  try {
    const { val } = req.params;
    const products = await Product.find({ name: { $ne: val } });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

//$in $nin $size $all
