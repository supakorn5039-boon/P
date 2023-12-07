const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/parking");
    console.log("DB is Connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;