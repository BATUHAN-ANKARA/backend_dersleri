const md5 = require("md5");

exports.hashToPassword = (password) => {
return md5(password)
};