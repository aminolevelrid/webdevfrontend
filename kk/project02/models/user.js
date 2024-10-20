const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        shortId: {
            type: String,
            required: true, // Use `required` instead of `require`
            unique: true,
        },
        redirectURL: {
            type: String,
            required: true, // Use `required` instead of `require`
        },
        visithistory: [
            {
                timestamps: { type: Number },
            },
        ],
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
    },
    { timestamps: true }
);

const URL = mongoose.model("URL", userSchema); // Use model name "URL" to match the usage in other files

module.exports = URL;
