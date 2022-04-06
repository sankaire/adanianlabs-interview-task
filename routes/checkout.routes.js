const express = require("express")
const { checkout } = require("../controllers/checkout.controller")
const { requireAuth } = require("../middleware/auth.midleware")
const router = express.Router()

router.route("/", requireAuth).get(checkout)

module.exports = router