const Admin = require("../models/admin.model");
const utils = require("../utils/index");

exports.createAdmin = async (req) => {
  try {
    const { name, surname, email, password, status } = req.body;
    const existAdmin = await Admin.findOne({ email: email }); //findOne her zaman obje alır süslü eksikti
    if (existAdmin) {
      throw new Error("Bu email zaten kullanımda");
    }
    const _password = utils.helper.hashToPassword(password);
    const admin = new Admin({
      name,
      surname,
      email,
      password: _password,
      status: status,
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
    const existAdmin = await Admin.findById(id);
    if (!existAdmin) {
      throw new Error("Admin bulunamadı");
    }
    if (existAdmin.status === "inactive") {
      throw new Error(
        "Bu işlemi gerçekleştiremezsiniz. Kaydınız deaktive edilmiştir."
      );
    }
    if (existAdmin.status === "pending") {
      return {
        message:
          "Şifre değiştirebilmek için aktif bir admin olmanız gerekiyor.",
      };
    }
    const _password = utils.helper.hashToPassword(password);
    const _newPassword = utils.helper.hashToPassword(newPassword);

    if (existAdmin.password !== _password) {
      throw new Error("Mevcut şifreniz yanlış.");
    }

    if (existAdmin.password === _password) {
      existAdmin.password = _newPassword;
      await existAdmin.save();
      return existAdmin;
    } else {
      throw new Error("Şifre yanlış");
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateStatus = async (req) => {
  try {
    const { id, status, adminId } = req.params;
    if (!["pending", "active", "inactive"].includes(status)) {
      throw new Error("Geçersiz status değeri");
    }// bunu eklemek gerekiyormuş dmongoosede params ve bodyden gelenler kontrol edilmiyormuş!!!!!
    const admin = await Admin.findById(id);
    if (!admin) {
      throw new Error("Statusu güncellenecek admin bulunamadı");
    }
    const existAdmin = await Admin.findById(adminId);
    if (!existAdmin) {
      throw new Error("Admin bulunamadı");
    }
    if (existAdmin.status === "active") {
      if (admin.status === "inactive") {
        throw new Error("Kaydınız deaktive edilmiştir!");
      } else if (admin.status === "pending" || admin.status === "active") {
        const updatedAdmin = await Admin.findByIdAndUpdate(
          id,
          { status: status },
          { new: true }
        );
        return updatedAdmin;
      }
    } else {
      throw new Error("Bu işlemi gerçekleştiremezsiniz");
    }
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
    const admins = await Admin.find({ name: name }); //süslü eksik
    return admins;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAdminsByStatus = async (req) => {
  try {
    const { status } = req.params;
    const admins = await Admin.find({ status: status });
    return admins;
  } catch (error) {
    throw new Error(error);
  }
}; //paramsa inActive yazdım yine de çalıştı ama modelde inactive ??

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
