const Admin = require("../models/admin.model");
const utils = require("../utils/index");

exports.createAdmin = async (req) => {
  try {
    const { name, surname, email, password } = req.body;
    const existAdmin = await Admin.findOne({ email: email });
    if (existAdmin) {
      throw new Error("Bu email zaten kullanımda");
    }
    const _password = utils.helper.hashToPassword(password);
    const admin = new Admin({
      name,
      surname,
      email,
      password: _password,
    });
    await admin.save();
    return admin;
  } catch (error) {
    throw new Error(error);
  }
};

exports.loginAdmin = async (req) => {
  try {
    const { email, password } = req.body;
    const _password = utils.helper.hashToPassword(password);
    const admin = await Admin.findOne({ email, password: _password });
    if (!admin) {
      throw new Error("Email veya şifre hatalı");
    }
    return admin;
  } catch (error) {
    throw new Error(error);
  }
};

exports.changePassword = async (req) => {
  try {
    const { id } = req.params;
    const { password, newPassword } = req.body;
    const admin = await Admin.findById(id);
    if (!admin) {
      throw new Error("Admin bulunamadı");
    }
    const _password = utils.helper.handleValidation(password);
    const _newPassword = utils.helper.handleValidation(newPassword);
    if (admin.password === _password) {
      admin.password === _newPassword;
      await admin.save();
      return admin;
    } else {
      throw new Error("Kullanıcı bilgileri yanlış ");
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateStatus = async (req) => {
  try {
    const { id, status } = req.params;
    const admin = await Admin.findById(id);
    if (!admin) {
      throw new Error("Admin bulunamadı");
    }
    const updatedAdmin = await Admin.findByIdAndUpdate(
      id,
      {
        status: status,
      },
      { new: true }
    );
    return updatedAdmin;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAllAdmins = async () => {
  try {
    const admins = await Admin.find();
    return admins;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAdminById = async (req) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findById(id);
    if (!admin) {
      throw new Error("Admin bulunamadı");
    }
    return admin;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAdminsByName = async (req) => {
  try {
    const { name } = req.params;
    const admins = await Admin.find({ name });
    return admins;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAdminsByStatus = async (req) => {
  try {
    const { status } = req.params;

    const admins = await Admin.find({ status });
    return admins;
  } catch (error) {
    throw new Error(error);
  }
};

exports.deleteAdminById = async (req) => {
  try {
    const { id } = req.params;
    const existAdmin = await Admin.findById(id);
    if (!existAdmin) {
      throw new Error("Admin bulunamadı");
    }
    await Admin.findByIdAndDelete(id);
    return "Admin silindi";
  } catch (error) {
    throw new Error(error);
  }
};
