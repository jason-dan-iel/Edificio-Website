const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const url = "mongodb+srv://daniel:abcd1234@edificio.zsvan2c.mongodb.net/?retryWrites=true&w=majority";

const connect = () => {
  try {
    mongoose.set({ strictQuery: false });
    mongoose.connect(url, () => {
      console.log("db connected");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
