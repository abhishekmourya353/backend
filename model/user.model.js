const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,     // Prevents duplicate values
            required: true,   // Field is mandatory
            lowercase: true,  // Converts input to lowercase
            minlength: 4,     // Minimum length of 4 characters
            trim: true,       // Trims whitespace at both ends
        },
        password: {
            type: String,
            minlength: 4,
        },
    },
    {
        timestamps: true,   // Automatically adds `createdAt` and `updatedAt`
    }
);


let userCollection = mongoose.model("User", userSchema); // users (plural+lowercase --> users)

//~ 4) export
module.exports = userCollection;
