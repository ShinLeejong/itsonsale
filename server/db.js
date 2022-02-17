require("dotenv").config();
const mongoose = require("mongoose");
module.exports = () => {
  const connect = () => {
    mongoose.connect(process.env.DB_ADDRESS, { dbName: "ItsOnSale" }, (err) => {
      if (err) {
        console.error("mongodb connection error", err);
      }
      console.log("mongodb connected");
    });
  };
  connect();
  mongoose.connection.on("disconnected", connect);
  //   require("./user.js"); // user.js는 나중에 만듭니다.
};
