const userSchema = require("../models/userSchema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function Login(req, res) {
    try {
        const { email, password } = req.body

        const user = await userSchema.findOne({ email });
        if (!user) {
          return res.status(409).json({ message: "User doesn't exist!" });
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
          return res.status(400).json({ message: "Invalid Credentials!"})
        }
        
        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        delete user.password
    
        res.status(200).json({ token, user })

    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
}

module.exports = Login;
