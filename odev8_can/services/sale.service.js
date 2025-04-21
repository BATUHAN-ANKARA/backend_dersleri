const Sale = require("../models/sale.model");
const Product = require("../models/product.model");

/*
fronttan products dizisi gelecek
dizinin içerisinde(id price quantity)
dizideki her idli elemanın var olup olmadığına
*/

exports.createSale = async (req) => {
  try {
    const { products, paymentMethod } = req.body;
    let totalPrice = 0;
    for (const product of products) {
      let dbProduct = await Product.findById(product.productId);
      console.log(dbProduct);
      if (!dbProduct) {
        throw new Error(`${product.productId} idli ürün bulunamadı`);
      } else if (dbProduct.status != "active") {
        throw new Error(
          `${dbProduct.name} ürününün durumu satış için uygun değil`
        );
      } else if (dbProduct.stock < product.quantity) {
        throw new Error(`Stok miktarı ${dbProduct.name} için yeterli değil`);
      } else if (paymentMethod != "Nakit" && paymentMethod != "Kredi Kartı") {
        throw new Error("Yanlış ödeme türü seçildi");
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
    throw new Error(error);
  }
};

//o günün satışları
//belirli bir mikatrdan fazla totalpriceı olan satışlar
//bir aralıktaki satışlar (miktar olarak (totalprice))
//bir aralıktaki satışlar (tarih olarak (1-14 nisan aralığı))
