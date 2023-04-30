//------- imports ----------//
const mongoose = require("mongoose");

//------- connect to the db ----------//
mongoose.set("strictQuery", false);
const connectDB = async () =>
  await mongoose
    .connect(process.env.DBURL)
    .then(() => console.log("Connected!"))
    .catch((err) => {
      console.log(err.message);
    });
module.exports = connectDB;
