const dotenv = require("dotenv");
const express = require("express");

dotenv.config();

const userRoutes = require("./router/route");
const { mongooDB } = require("./config/database");
const app = express();

mongooDB();
// console.log(process.env);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", userRoutes);

app.listen(process.env.PORT, () => {
    console.log("connection succeful");
});