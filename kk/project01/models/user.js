const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        sparse: true // Allows multiple null values
    }
},{timestamps:true});

const User = mongoose.model('User', userSchema);

module.exports=User;