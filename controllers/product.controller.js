const Products = require("../models/Products")

exports.newProduct = async (req, res) =>{
    const{title, desc, categories, img, size, price} = req.body
    try{
        const newProd = await Products.create({
            title,
            desc,
            categories,
            img,
            size,
            price
        })
        return res.status(200).json({newProd})
    }catch(err){
        res.status(400).json({message:"Product couldn't be created"})
    }
}
exports.getAllProducts = async (req, res) =>{
    try{
        const items = await Products.find({...req.body})
        return res.status(200).json({items})
    }catch(err){
        console.log(err)
        return res.status(400).json({message:"can't get Product"})
    }
}
exports.getOneProduct = async (req, res) =>{
    try{
        const item = await Products.findOne({...req._id})
        return res.status(200).json({item})
    }catch(err){
        console.log(err)
        return res.status(400).json({message:"can't get Product"})
    }
}
exports.updatedProduct =  async (req, res) => {
    try {
      const updatedProduct = await Products.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true },
      )
      res.status(200).json(updatedProduct)
    } catch (err) {
      res.status(500).json(err)
    }
}

  //DELETE
exports.deleteProd = async (req, res) => {
    try {
      await Products.findByIdAndDelete(req.params.id)
      res.status(200).json("Product has been deleted...")
    } catch (err) {
      res.status(500).json(err)
    }
}
