const router = require ("express").Router()
const controller = require ("../controller/controller")

router.post("/createUser", controller.createUser)
router.put("/updateUser/:userId", controller.updateUser)
router.get("/getAllUsers",controller.getAllUsers)
router.get("/getUserById/:userId",controller.getUserById)
router.delete("/deleteUserById/:userId", controller.deleteUserById)
router.put("/updatePassword/:userId", controller.updatePassword)

module.exports = router