const userSchema = require("../models/userSchema")
const bcrypt = require('bcrypt');
const multer  = require('multer')
const jwt = require('jsonwebtoken')

// router.post("/register", upload.single("profileImage"), async (req, res) => {})

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "public/uploads/"); 
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname); 
//     },
//   });

//   const upload = multer({storage});
const Register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body
        const profileImage = req.file
        if(!profileImage) {
            return res.send({message: "Profile image is required"})
        }
        const profileImagePath = profileImage.path 
        const exitUser = await userSchema.findOne({email})
        if (exitUser) {
            res.send({message: "User already exist"})
        }

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new userSchema({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            profileImage: profileImagePath
        })
        await user.save()
        res.send({message: "User created successfully"})
    } catch (error) {
        console.log(error);
    }
}

module.exports = Register