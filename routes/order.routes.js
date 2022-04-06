const express = require("express")
const {
  createOrder,
  getUserOrder,
  updateOrder,
  deleteOder,
} = require("../controllers/order.controller")

const router = express.Router()

//routes
router.route("/").post(createOrder)
router
  .route("/:id")
  .get(getUserOrder)
  .put(updateOrder)
  .delete(deleteOder)

module.exports = router
