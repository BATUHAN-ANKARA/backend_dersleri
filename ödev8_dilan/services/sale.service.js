const Sale = require("../models/sale.model");
const Product = require("../models/product.model");

exports.createSale = async (req) => {
  try {
    const { products, paymentMethod } = req.body;

    if (!products || !Array.isArray(products) || products.length === 0) {
      throw new Error("Ürün listesi boş olamaz.");
    }

    if (paymentMethod !== "Nakit" && paymentMethod !== "Kredi Kartı") {
      throw new Error("Yanlış ödeme türü seçildi");
    }

    let totalPrice = 0;

    for (const product of products) {
      const dbProduct = await Product.findById(product.productId);

      if (!dbProduct) {
        throw new Error(`${product.productId} idli ürün bulunamadı`);
      }

      if (dbProduct.status !== "active") {
        throw new Error(
          `${dbProduct.name} ürününün durumu satış için uygun değil`
        );
      }

      if (dbProduct.stock < product.quantity) {
        throw new Error(`Stok miktarı ${dbProduct.name} için yeterli değil`);
      }

      totalPrice += product.price * product.quantity;
    }

    const sale = new Sale({
      products,
      paymentMethod,
      totalPrice,
    });

    await sale.save();
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
    throw new Error("Satışlar alınırken bir hata oluştu.");
  }
};

exports.getTodaySales = async () => {
  try {
    const today = new Date();
    const sales = await Sale.find({
      createdAt: {
        $gte: new Date(`${today}T00:00:00.000Z`),
        $lt: new Date(`${today}T23:59:59.999Z`),
      },
    });

    return sales;
  } catch (error) {
    throw new Error("Bugünün satışları getirilirken bir hata oluştu.");
  }
};

exports.getSalesByMinTotalPrice = async (minPrice) => {
  try {
    const sales = await Sale.find({ totalPrice: { $gte: minPrice } });
    return sales;
  } catch (error) {
    throw new Error("Toplam fiyat filtresine göre satışlar alınamadı.");
  }
};


exports.getSalesByTotalPriceRange = async (minPrice, maxPrice) => {
  try {
    const sales = await Sale.find({
      totalPrice: { $gte: minPrice, $lte: maxPrice },
    });
    return sales;
  } catch (error) {
    throw new Error("Toplam fiyat aralığına göre satışlar alınamadı.");
  }
};


exports.getSalesByDateRange = async (startDate, endDate) => {
  try {
    const sales = await Sale.find({
      createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) },
    });
    return sales;
  } catch (error) {
    throw new Error("Tarih aralığına göre satışlar alınamadı.");
  }
};
