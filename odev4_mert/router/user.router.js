const router = require("express").Router()
const controller = require("../controller/user.controller")

router.post("/register",controller.register)
router.post("/login",controller.login)
router.put("/updateUser/:userId", controller.updateUser)
router.put("/updatePassword/:userId", controller.updatePassword)
router.put("/deleteUser/:userId", controller.deleteUser)
router.get("/getUserById", controller.getUserById)
router.get("/getAllUsers", controller.getAllUsers)
router.get("/getUserByName", controller.getUserByName)
router.get("/getUsersBySurname", controller.getUsersBySurname)


module.exports = router