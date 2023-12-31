const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    required: false,
    unique: false,
  },
  password: {
    type: String,
    required: true,
  },
  birth: {
    type: Date,
    required: true,
  },
  role: {
    type: String,
    default: "memeber",
  },
},{timestamps:true});


const user = mongoose.model("user", userSchema);

module.exports = user;
