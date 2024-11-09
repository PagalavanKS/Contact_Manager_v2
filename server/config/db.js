const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://pagalavanks22cse:pagalavan@conatct.93gsx.mongodb.net/?retryWrites=true&w=majority&appName=conatct", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30 seconds timeout
      socketTimeoutMS: 45000, // 45 seconds socket timeout
    });

    console.log("Connection to database established...");
    
    // Log successful connection
    mongoose.connection.on('connected', () => {
      console.log('Mongoose connected to DB');
    });
    
    // Log connection errors
    mongoose.connection.on('error', (err) => {
      console.error('Mongoose connection error:', err);
    });
    
    // Log disconnection
    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose disconnected');
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
