const Zodiac = require("../models/zodiac.model");

/*
create
delete
getall
update
*/

exports.createZodiac = async (req) => {
  try {
    const { title, daily, weekly, monthly } = req.body;

    const existingZodiac = await Zodiac.findOne({ title });
    if (existingZodiac) {
      throw new Error("Bu burç zaten kayıtlı.");
    }

    const zodiac = new Zodiac({
      title,
      daily,
      weekly,
      monthly,
    });

    await zodiac.save();
    return zodiac;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getAllZodiacs = async () => {
  try {
    return await Zodiac.find();
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getZodiacById = async (req) => {
  try {
    const { id } = req.params;
    const zodiac = await Zodiac.findById(id);
    if (!zodiac) {
      throw new Error("Burç bulunamadı.");
    }
    return zodiac;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateZodiac = async (req) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedZodiac = await Zodiac.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedZodiac) {
      throw new Error("Güncellenecek burç bulunamadı.");
    }

    return updatedZodiac;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.deleteZodiac = async (req) => {
  try {
    const { id } = req.params;
    const zodiac = await Zodiac.findByIdAndDelete(id);
    if (!zodiac) {
      throw new Error("Silinecek burç bulunamadı.");
    }
    return "Burç başarıyla silindi.";
  } catch (error) {
    throw new Error(error.message);
  }
};
