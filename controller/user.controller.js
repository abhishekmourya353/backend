const userCollection = require("../model/user.model");
const expressAsyncHandler = require("express-async-handler");

const registerUser = expressAsyncHandler(async (req, res) => {
    console.log(req.body);
    //~ destructured all the data
    let { name, email, password } = req.body;
    console.log(req.body);
    let newUser = await userCollection.insertOne({
        name,
        email,
        password
    });

    //~ send a response
    res.status(201).json({
        success: true,
        message: "Candidate registered successfully",
        data: newUser,
    });
});

module.exports = {
    registerUser
}