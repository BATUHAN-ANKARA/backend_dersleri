const imageMiddleware = require("../middlewares/singleImage.middleware");
const utils = require("../utils/helper");

exports.uploadImage = (req, res) => {
  return new Promise((resolve, reject) => {
    imageMiddleware.upload(req, res, async (err) => {
      if (err) return reject(err);

      const host = await utils.getHost();
      const filePath = process.env.FILE_PATH || "/uploads/";
      const fileName = req.file.filename;
      const fullUrl = `${host}${filePath}${fileName}`;
      resolve(fullUrl);
    });
  });
};
