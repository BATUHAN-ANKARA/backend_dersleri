const userService = require("./user.service");
const zodiacService=require("./zodiac.service");
const blogService=require("./blog.service");
const relationshipService=require("./relationship.service");

module.exports={
    user:userService,
    zodiac:zodiacService,
    blog:blogService,
    relationship:relationshipService,
}