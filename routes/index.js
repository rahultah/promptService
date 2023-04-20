const router = require("express").Router()


router.use("/ping" ,require("./ping"))

module.exports = router