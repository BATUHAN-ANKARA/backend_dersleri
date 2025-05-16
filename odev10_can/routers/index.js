const blogRouter = require("./blog.router").blog;
const userRouter = require("./user.router").user;
const zodiacRouter = require("./zodiac.router").zodiac;
const relationshipRouter = require("./relationship.router").relationship;

module.exports = {
  blogRouter,
  userRouter,
  zodiacRouter,
  relationshipRouter,
};
