const express = require('express')
const router = express.Router()
const authRouter = require('./athentication')
const listingRouter = require('./listingRoute')

router.use('/athentication', authRouter)
router.use('/listing', listingRouter)


module.exports = router