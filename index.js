const express = require('express')
const app = express()
const port = 8000
app.use(express.json())
require('dotenv').config();
const route = require('./route')
const cors = require('cors')

app.use(cors())

app.use(route)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})