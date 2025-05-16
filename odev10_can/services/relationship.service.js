const Relationship = require("../models/relationship.model");
const User = require("../models/user.model")

exports.addRelationship = async (req) => {
  try {
    const { zodiacName, otherZodiacName, compatibilityText } = req.body;

    const existing = await Relationship.findOne({ zodiacName, otherZodiacName });
    if (existing) {
      throw new Error("Bu ilişki zaten mevcut. Lütfen güncelleyin.");
    }

    const newRelationship = new Relationship({
      zodiacName,
      otherZodiacName,
      compatibilityText,
    });

    return await newRelationship.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateRelationship = async (req) => {
  try {
    const { zodiacName, otherZodiacName, compatibilityText } = req.body;

    const updated = await Relationship.findOneAndUpdate(
      { zodiacName, otherZodiacName },
      { compatibilityText },
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

exports.getAllRelationships = async () => {
  try {
    const relationships = await Relationship.find();
    return relationships;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getCompatibilityBetween = async (req) => {
  try {
    const { zodiacName, otherZodiacName } = req.params;
    const relationship = await Relationship.findOne({
      zodiacName,
      otherZodiacName,
    });
    return relationship;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.deleteRelationshipById = async (req) => {
  try {
    const { id } = req.params;
    const deleted = await Relationship.findByIdAndDelete(id);
    return deleted;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.likeRelationship = async (req) => {
  try {
    const { relationshipId, userId } = req.params;

    const user = await User.findById(userId);
    if (!user) {
      throw new Error("Kullanıcı bulunamadı");
    }

    const relationship = await Relationship.findById(relationshipId);
    if (!relationship) {
      throw new Error("ilişki uyumu bulunamadı");
    }

    const isLiked = user.likedRelationships?.some(
      (id) => id.toString() === relationshipId
    );
    if (isLiked) {
      throw new Error("Bu ilişki uyumu zaten beğenilmiş");
    }

    await User.findByIdAndUpdate(
      userId,
      { $push: { likedRelationships: relationshipId } },
      { new: true }
    );

    return "Relationship beğenildi";
  } catch (error) {
    throw new Error(error);
  }
};
