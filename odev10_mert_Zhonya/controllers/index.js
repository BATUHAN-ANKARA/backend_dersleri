const blogController = require("./blog.controller");
const userController = require("./user.controller");
const zodiacController = require("./zodiac.controller");
const relationshipController = require("./relationship.controller");
const { relationship } = require("../services");

module.exports = {
  blog: blogController,
  user: userController,
  zodiac: zodiacController,
  relationship:relationshipController,
};
