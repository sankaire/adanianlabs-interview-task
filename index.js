const express = require("express")
const cors = require("cors")

// db connect
require("./config/db")

// pull in routes
const userRouter = require("./routes/user.routes")
const product = require("./routes/products.routes")
const orders = require("./routes/order.routes")

const app = express()
app.use(cors())
app.use(express.json())

//register routes
app.use("/api/user/", userRouter)
app.use("/api/products/", product)
app.use("/api/orders", orders)

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log(`api runing on http://localhost:${PORT}`))