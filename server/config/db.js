const mongoose = require("mongoose");

const connectDB = async () => {
  return mongoose
    .connect("mongodb+srv://pagalavanks22cse:pagalavan@conatct.93gsx.mongodb.net/?retryWrites=true&w=majority&appName=conatct")
    .then(() => console.log("connection to database established..."))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
