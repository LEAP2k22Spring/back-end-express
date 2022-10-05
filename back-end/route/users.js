const express = require("express")
const router = express.Router()
const { getUsers } = require("../controller/users.js")

router.get("/", getUsers)

module.exports = router