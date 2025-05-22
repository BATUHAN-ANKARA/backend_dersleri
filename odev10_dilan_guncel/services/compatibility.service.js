const Compatibility = require("../models/compatibility.model"); 


/*
create
delete
update
liked
getall
*/



exports.createCompatibility = async (req) => {
  try {
    const { primaryZodiacSign, secondaryZodiacSign, compatibilityDescription } = req.body;

    const existCompatibility = await Compatibility.findOne({
      primaryZodiacSign,
      secondaryZodiacSign,
    });

    if (existCompatibility) {
      throw new Error("Bu iki burç arasındaki ilişki zaten tanımlı.");
    }

    const compatibility = new Compatibility({
      primaryZodiacSign,
      secondaryZodiacSign,
      compatibilityDescription,
    });

    await compatibility.save();
    return compatibility;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.deleteCompatibilityById = async (req) => {
  try {
    const { id } = req.params;
    const compatibility = await Compatibility.findByIdAndDelete(id);
    if (!compatibility) {
      throw new Error("Silinecek ilişki bulunamadı.");
    }
    return compatibility;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateCompatibility = async (req) => {
  try {
    const { primaryZodiacSign, secondaryZodiacSign, compatibilityDescription } = req.body;

    const updated = await Compatibility.findOneAndUpdate(
      { primaryZodiacSign, secondaryZodiacSign },
      { compatibilityDescription },
      { new: true }
    );

    if (!updated) {
      throw new Error("Güncellenecek ilişki bulunamadı.");
    }

    return updated;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getAllCompatibility = async () => {
  try {
    return await Compatibility.find();
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getCompatibilityBetween = async (req) => {
  try {
    const { primaryZodiacSign, secondaryZodiacSign } = req.params;

    const compatibility = await Compatibility.findOne({
      primaryZodiacSign,
      secondaryZodiacSign,
    });

    if (!compatibility) {
      throw new Error("Bu iki burç arasında ilişki bulunamadı.");
    }

    return compatibility;
  } catch (error) {
    throw new Error(error.message);
  }
};
