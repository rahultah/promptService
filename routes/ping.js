const { response } = require("express")

const router = require("express").Router()

const handlePingRequest = (req, res) => {
    res.json({ ping: "pong" })
}
router.get("/", handlePingRequest)

module.exports = router