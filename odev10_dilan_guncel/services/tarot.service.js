const Tarot = require("../models/tarot.model");
const { sendMessage } = require("./telegram.service");

exports.createTarot = async (req) => {
  try {
    const { cardName, description, position } = req.body;
    const existTarot = await Tarot.findOne({ cardName, position });
    if (existTarot) {
      throw new Error("Bu kart ve pozisyonu zaten mevcut");
    }
    const tarot = new Tarot({
      cardName,
      description,
      position,
    });
    await tarot.save();
    return tarot;
  } catch (error) {
    throw new Error("Kayıt oluşturulamadı");
  }
};

exports.deleteTarot = async (req) => {
  try {
    const { cardName, position } = req.body;

    const existTarot = await Tarot.findOne({ cardName, position });
    if (!existTarot) {
      throw new Error("Bu isim ve pozisyona sahip bir kart bulunamadı");
    }

    await Tarot.deleteOne({ _id: existTarot._id });

    return { message: "Kart başarıyla silindi" };
  } catch (error) {
    throw new Error("Kart silinemedi");
  }
};

exports.getAllTarot = async () => {
  try {
    const tarot = await Tarot.find();
    return tarot;
  } catch (error) {
    throw new Error("Kartlar listelenemedi");
  }
};

exports.updateTarot = async (req) => {
  try {
    const { cardName, position, newDescription, newPosition } = req.body;

    const tarot = await Tarot.findOne({ cardName, position });
    if (!tarot) {
      throw new Error("Kart bulunamadı");
    }

    if (newDescription !== tarot.description) {
      tarot.description = newDescription;
    }
    if (newPosition !== tarot.position) {
      tarot.position = newPosition;
    }

    await tarot.save();
    return tarot;
  } catch (error) {
    throw new Error("Kart güncellenemedi");
  }
};

exports.randomTarot = async () => {
  try {
    const count = await Tarot.countDocuments();
    await sendMessage(
      `🃏 *${card.cardName}* (${card.position})\n\n${card.description}`
    );
    return Tarot.findOne().skip(Math.floor(Math.random() * count));
  } catch (error) {
    throw new Error("Kart seçimi başarısız oldu");
  }
};
