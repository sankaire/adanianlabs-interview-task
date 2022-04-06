const express = require("express")
const { signUp, signIn, getOneUser } = require("../controllers/user.controller")
const router = express.Router()

//routes
router.route("/signup").post(signUp)
router.route("/login").get(signIn)
// /login/:id
router.route("/login/:id").get(getOneUser)


module.exports = router