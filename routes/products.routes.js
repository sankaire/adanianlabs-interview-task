const express = require("express")
const {
  newProduct,
  getAllProducts,
  getOneProduct,
  updatedProduct,
  deleteProd,
} = require("../controllers/product.controller")
const router = express.Router()

//routes
router
  .route("/")
  .post(newProduct)
  .get(getAllProducts)
router
  .route("/:id")
  .get(getOneProduct)
  .put(updatedProduct)
  .delete(deleteProd)

module.exports = router
