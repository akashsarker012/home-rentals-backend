const express = require('express')
const mongoose = require('mongoose');

const dotenv = require('dotenv')

function dbConection() {

    mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected!'));
}

module.exports = dbConection