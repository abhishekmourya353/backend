const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();
const mongooDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("database connected..........");
};

module.exports = {
    mongooDB,
};