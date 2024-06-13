const express = require('express');
const {listingController, getAllListingController} = require('../../controller/listingController');
const multer  = require('multer');
const Listing = require('../../models/Listing');
const router = express.Router();

router.use(express.json());

/* Configuration Multer for File Upload */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); // Store uploaded files in the 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  },
});

const upload = multer({ storage });

// /* CREATE LISTING */
// router.post("/create", upload.array("listingPhotos"), async (req, res) => {
//   try {
//     /* Take the information from the form */
//     const {
//       creator,
//       category,
//       type,
//       streetAddress,
//       aptSuite,
//       city,
//       province,
//       country,
//       guestCount,
//       bedroomCount,
//       bedCount,
//       bathroomCount,
//       amenities,
//       title,
//       description,
//       highlight,
//       highlightDesc,
//       price,
//     } = req.body;

//     const listingPhotos = req.files

//     if (!listingPhotos) {
//       return res.status(400).send("No file uploaded.")
//     }

//     const listingPhotoPaths = listingPhotos.map((file) => file.path)

//     const newListing = new Listing({
//       creator,
//       category,
//       type,
//       streetAddress,
//       aptSuite,
//       city,
//       province,
//       country,
//       guestCount,
//       bedroomCount,
//       bedCount,
//       bathroomCount,
//       amenities,
//       listingPhotoPaths,
//       title,
//       description,
//       highlight,
//       highlightDesc,
//       price,
//     })

//     await newListing.save()

//     res.status(200).json(newListing)
//   } catch (err) {
//     res.status(409).json({ message: "Fail to create Listing", error: err.message })
//     console.log(err)
//   }
// });

router.post("/create", upload.array("listingPhotos"), listingController)
router.get("/getlisting", getAllListingController)
router.get("/search", getAllListingController)

module.exports = router;
