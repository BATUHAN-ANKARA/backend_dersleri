const Zodiac = require("../models/zodiac.model");
const User = require("../models/user.model");

exports.addHoroscope = async (req) => {
  try {
    const { name, daily, weekly, monthly, yearly } = req.body;
    const now = new Date();

    const existing = await Zodiac.findOne({ name });
    if (existing) {
      throw new Error("Bu burç zaten var. Lütfen güncelleyin.");
    }

    const newZodiac = new Zodiac({
      name,
      daily: daily ? [{ title: "daily", text: daily, date: now }] : [],
      weekly: weekly ? [{ title: "weekly", text: weekly, date: now }] : [],
      monthly: monthly ? [{ title: "monthly", text: monthly, date: now }] : [],
      yearly: yearly ? [{ title: "yearly", text: yearly, date: now }] : [],
    });

    return await newZodiac.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateHoroscope = async (req) => {
  try {
    const { name, daily, weekly, monthly, yearly } = req.body;
    const now = new Date();

    const existing = await Zodiac.findOne({ name });
    if (!existing) {
      throw new Error("Bu burç bulunamadı. Lütfen önce ekleyin.");
    }

    const newDaily = daily ? [{ title: "daily", text: daily, date: now }] : [];
    const newWeekly = weekly
      ? [{ title: "weekly", text: weekly, date: now }]
      : [];
    const newMonthly = monthly
      ? [{ title: "monthly", text: monthly, date: now }]
      : [];
    const newYearly = yearly
      ? [{ title: "yearly", text: yearly, date: now }]
      : [];

    const updatedZodiac = await Zodiac.findOneAndUpdate(
      { name },
      {
        $push: {
          daily: { $each: newDaily },
          weekly: { $each: newWeekly },
          monthly: { $each: newMonthly },
          yearly: { $each: newYearly },
        },
      },
      { new: true }
    );

    return updatedZodiac;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getAllHoroscope = async () => {
  try {
    const zodiacs = await Zodiac.find();
    return zodiacs;
  } catch (error) {
    throw new Error(error);
  }
};

exports.likeZodiac = async (req) => {
  try {
    const { zodiacId, userId } = req.params;

    const user = await User.findById(userId);
    if (!user) {
      throw new Error("Kullanıcı bulunamadı");
    }

    const zodiac = await Zodiac.findById(zodiacId);
    if (!zodiac) {
      throw new Error("Burç bulunamadı");
    }

    const isLiked = user.likedZodiacs?.some((id) => id.toString() === zodiacId);
    if (isLiked) {
      throw new Error("Bu burç zaten beğenilmiş");
    }

    await User.findByIdAndUpdate(
      userId,
      { $push: { likedZodiacs: zodiacId } },
      { new: true }
    );

    return "Burç beğenildi";
  } catch (error) {
    throw new Error(error);
  }
};
