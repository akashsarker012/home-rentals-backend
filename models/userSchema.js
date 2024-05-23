const  mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        default: ""
    },
    tripList: {
        type: Array,
        default: []
    },
    wishList: {
        type: Array,
        default: []
    },
    propertyList: {
        type: Array,
        default: []
    },
    reservationList: {
        type: Array,
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    }
  });
  module.exports = mongoose.model("User", userSchema)