const md5 = require("md5");

exports.hasToPassword = (password) => {
  return md5(password);
};
