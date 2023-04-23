const router = require("express").Router()


router.use("/ping" ,require("./ping"))
router.use("/addPrompts" ,require("./postPrompts"))

module.exports = router