const { StatusCodes } = require("http-status-codes");
const User = require("../model/user.model");
const baseResponse = require("../dto/baseResponse.dto");
const utils = require("../utils/helper");

exports.register = async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;
    const existUser = await User.find({ email: email });
    if (existUser.lenght > 0) {
      throw new Error("Email kullanımda");
    }
    const _password = utils.hashToPassword(password);
    const user = new User({
      name,
      surname,
      email,
      password: _password,
    });
    await user.save();
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      data: user,
      code: StatusCodes.CREATED,
      timestamp: new Date(),
      message: "Kayıt Başarılı",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      succes: false,
      error: true,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      timestamp: new Date(),
      message: error.message,
    });
  }
};
