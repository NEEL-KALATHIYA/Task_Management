const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://task:task@cluster0.tvyih79.mongodb.net/task?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connect to database ");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = connectDb;
