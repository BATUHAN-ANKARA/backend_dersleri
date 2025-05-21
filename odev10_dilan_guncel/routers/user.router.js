const controller = require("../controllers/index");
const router = require("express").Router();


router.post("/createuser",  controller.user.createUser);
router.delete("/deleteUser/:id",  controller.user.deleteUser);
router.post("/loginUser", controller.user.loginUser);

router.put("/updateUserInfo/:id",  controller.user.updateUserInfo);
module.exports = {
    user:router
}