const User = require("../models/User")
const jwt = require("jsonwebtoken")

// create token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'tepelakerenke', {
      expiresIn: maxAge
    });
};

exports.signUp = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const token = createToken(User._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        const user = await User.create({
            name,
            email,
            password
        })
        return res.status(200).json({ user })
    } catch (err) {
        return res.status(400).json({ message: 'user not created' })
    }
}
exports.signIn = async (req, res) =>{
    try{
        const user = await User.find({...req.body})
        return res.status(200).json({user})
    }catch(err){
        return res.status(400).json({message:"user not found"})
    }
}
exports.getOneUser = async (req, res) =>{
    try{
        const user = await User.findOne({...req._id})
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        return res.status(200).json({user})
    }catch(err){
        return res.status(400).json({message:"user not found"})
    }
}