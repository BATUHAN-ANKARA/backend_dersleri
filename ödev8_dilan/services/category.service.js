const Category = require("../models/category.model");
const Admin = require("../models/admin.model");

exports.createCategory = async (req) => {
  try {
    const { name, description, adminId } = req.body;
    const existAdmin = await Admin.findById(adminId);
    if (!existAdmin) {
      throw new Error("Admin bulunamadı");
    }
    const existCategory = await Category.find({name});
    if (!existCategory) {
      throw new Error("Bu kategori zaten mevcut");
    }
    const category = new Category({
      name,
      description,
    });
    await category.save();
    return category;
  } catch (error) {
    throw new Error(error);
  }
};

exports.deleteCategory = async (req) => {
  try {
    const { id, adminId } = req.params;
    const existAdmin = await Admin.findById(adminId);
    if (!existAdmin) {
      throw new Error("Admin bulunamadı");
    }
    const existCategory = await Category.findById(id);
    if (!existCategory) {
      throw new Error("Kategori bulunamadı");
    }
    await Category.findByIdAndDelete(id);
    return "Kategori silindi";
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAllCateories = async () => {
  try {
    const categories = await Category.find();
    return categories;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCategoryById = async (req) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    return category;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCategoriesByStatus = async (req) => {
  try {
    const { status } = req.params;
    const categories = await Category.find({status});
    return categories;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getFeaturedCategories = async () => {
  try {
    const categories = await Category.find({ isFeatured: true });
    return categories;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateCategoryStatus = async (req) => {
  try {
    const { id, status, adminId } = req.params;
    const existAdmin = await Admin.findById(adminId);
    if (!existAdmin) {
      throw new Error("Admin bulunamadı");
    }
    const existCategory = await Category.findById(id);
    if (!existCategory) {
      throw new Error("Kategori bulunamadı");
    }
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { status: status },
      { new: true }
    );
    return updatedCategory;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateCategoryFeature = async (req) => {
  try {
    const { id, status, adminId } = req.params;
    const existAdmin = await Admin.findById(adminId);
    if (!existAdmin) {
      throw new Error("Admin bulunamadı");
    }
    const existCategory = await Category.findById(id);
    if (!existCategory) {
      throw new Error("Kategori bulunamadı");
    }
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { isFeatured: status },
      { new: true }
    );
    return updatedCategory;
  } catch (error) {
    throw new Error(error);
  }
};