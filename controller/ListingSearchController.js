const Listing = require("../models/Listing")

async function name(req, res) {

    const { search } = req.params

    try {
      let listings = []
  
      if (search === "all") {
        listings = await listings.find().populate("creator")
      } else {
        listings = await listings.find({
          $or: [
            { category: {$regex: search, $options: "i" } },
            { title: {$regex: search, $options: "i" } },
          ]
        }).populate("creator")
      }
  
      res.status(200).json(listings)
    } catch (err) {
      res.status(404).json({ message: "Fail to fetch listings", error: err.message })
      console.log(err)
    }
    
}