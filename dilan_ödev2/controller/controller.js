const User = require("../model/user.model");
<<<<<<< HEAD
exports.createUser = async (req, res) => {
  try {
    const { name, surname, email, gender, phone, title, age } = req.body;
    const user = new User({ name, surname, email, gender, phone, title, age });
=======

exports.createUser = async (req, res) => {
  try {
    const { name, surname, email, gender, title, age } = req.body;
    const user = new User({
      name,
      surname,
      email,
      gender,
      title,
      age,
    });
>>>>>>> 85d947e728a09e885b0882661940307917787dda
    await user.save();
    res.json({
      error: false,
      success: true,
      message: "Kayıt başarılı",
      data: user,
    });
  } catch (error) {
    res.json({ error: true, success: false, errorMessage: error.message });
  }
};

<<<<<<< HEAD
//tüm kullanıcıları getirme
=======
// Tüm kullanıcıları getirme

>>>>>>> 85d947e728a09e885b0882661940307917787dda
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); //tüm kullanıcıları getirir
    res.json({
      error: false,
      success: true,
      message: "Kullanıcılar başarıyla listelendi",
      data: users,
    });
  } catch (error) {
    res.json({ error: true, success: false, errorMessage: error.message });
  }
};

<<<<<<< HEAD
exports.getUserByName = async (req, res) => {
  try {
    const { name } = req.params;
    const user = await User.find({ name: name });
=======
exports.getUsersByName = async (req, res) => {
  try {
    const { name } = req.params;
    const users = await User.find({ name: name });
>>>>>>> 85d947e728a09e885b0882661940307917787dda
    res.json({
      error: false,
      success: true,
      message: "Kullanıcılar başarıyla listelendi",
      data: users,
    });
  } catch (error) {
    res.json({ error: true, success: false, errorMessage: error.message });
  }
};

<<<<<<< HEAD
//soyad da istersek getUserByNameAndSurname olur 
=======
exports.getUsersByNameAndSurname = async (req, res) => {
  try {
    const { name, surname } = req.params;
    const users = await User.find({ name: name, surname: surname });
    res.json({
      error: false,
      success: true,
      message: "Kullanıcılar başarıyla listelendi",
      data: users,
    });
  } catch (error) {
    res.json({ error: true, success: false, errorMessage: error.message });
  }
};
>>>>>>> 85d947e728a09e885b0882661940307917787dda
