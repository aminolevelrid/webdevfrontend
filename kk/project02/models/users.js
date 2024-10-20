const mongoose = require("mongoose");
const shortid = require("shortid"); 

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Email should be unique
  },
  password: {
    type: String,
    required: true,
  },
  shortid: {
    type: String,
    unique: true,
    default: shortid.generate, // Ensure shortid is generated for each user
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
