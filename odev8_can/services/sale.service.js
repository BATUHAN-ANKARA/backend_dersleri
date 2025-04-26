const Sale = require("../models/sale.model");
const Product = require("../models/product.model");
const utils = require("../utils/index");
const User=require("../models/user.model");

exports.createSale = async (req) => {
  try {
    const { products, paymentMethod, user } = req.body;

    if (!products || !Array.isArray(products) || products.length === 0) {
      throw new Error("Ürün listesi boş olamaz.");
    }

    let totalPrice = 0;
    for (let item of products) {
      const product = await Product.findById(item.productId);
      if (!product) {
        throw new Error("Ürün bulunamadı: " + item.productId);
      }

      totalPrice += product.price * item.quantity;
      item.price = product.price;
    }

    const sale = new Sale({
      products,
      totalPrice,
      paymentMethod,
      user,
    });

    await sale.save();

    await User.findByIdAndUpdate(user, {
      $push: {
        purchaseHistory: { saleId: sale._id },
      },
    }, { new: true, runValidators: true });

    return sale;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAllSales = async () => {
  try {
    const sales = await Sale.find();
    return sales;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getSaleById = async (req) => {
  try {
    const { saleId } = req.params;
    const sale = await Sale.findById(saleId);
    if (!sale) throw new Error("Satış bulunamadı");
    return sale;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateSale = async (req) => {
  try {
    const { saleId } = req.params;
    const { updateData } = req.body;
    const sale = await Sale.findById(saleId);
    if (!sale) throw new Error("Satış bulunamadı");

    if (updateData.products) {
      let totalPrice = 0;
      for (let item of updateData.products) {
        const product = await Product.findById(item.productId);
        if (!product) throw new Error(`Ürün bulunamadı: ${item.productId}`);
        totalPrice += product.price * item.quantity;
      }
      updateData.totalPrice = totalPrice;
    }

    const updatedSale = await Sale.findByIdAndUpdate(saleId, updateData, {
      new: true,
    });
    return updatedSale;
  } catch (error) {
    throw new Error(error);
  }
};

exports.deleteSale = async (req) => {
  try {
    const { saleId } = req.params;
    const sale = await Sale.findByIdAndDelete(saleId);
    if (!sale) throw new Error("Satış bulunamadı");
    await User.updateOne(
      { _id: sale.user }, 
      { $pull: { purchaseHistory: { saleId: saleId } } } );
    return { message: "Satış başarıyla silindi" };
  } catch (error) {
    throw new Error(error);
  }
};
