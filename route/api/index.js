const express = require('express')
const router = express.Router()
const authRouter = require('./athentication')

router.use('/athentication', authRouter)


module.exports = router