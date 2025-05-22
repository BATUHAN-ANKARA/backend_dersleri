const blogValidator = require("./blog.validation");
const userValidator = require("./user.validation");
const zodiacValidator = require("./zodiac.validation");
const compatibilityValidator = require("./compatibility.validation");

module.exports = {
  blog: blogValidator,
  user: userValidator,
  zodiac: zodiacValidator,
  compatibility: compatibilityValidator,
};
