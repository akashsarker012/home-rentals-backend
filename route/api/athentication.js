const express = require('express');
const Register = require('../../controller/register');
const multer = require('multer');
const Login = require('../../controller/login');
const router = express.Router();

router.use(express.json());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/uploads/"); 
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); 
    },
  });

  const upload = multer({storage});

router.post("/register", upload.single("profileImage"), Register)
router.post("/login", Login)

module.exports = router;
