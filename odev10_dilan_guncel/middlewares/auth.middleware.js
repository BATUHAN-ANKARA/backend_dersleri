const utils = require("../utils/index");
const { StatusCodes } = require("http-status-codes");
const consts = require("../consts/index");

module.exports = (req, res, next) => {
  try {
    let query = consts.general.ROUTES.find((item) => {
      if (req.url.includes(item)) {
        return true;
      } else {
        return false;
      }
    });
    if (!query) {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = utils.helper.verifyToken(token);
      if (decodedToken.decodedToken === null) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
          error: true,
          success: false,
          message: "Yetkilendirme hatası",
        });
      }
      req.user = decodedToken;
      next();
      return;
    }
    next();
  } catch (error) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      error: true,
      success: false,
      message: "Yetkilendirme hatası",
    });
  }
};