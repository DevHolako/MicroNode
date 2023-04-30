//------- imports ----------//
const express = require("express");
const cors = require("cors");
const env = require("dotenv");
const connectDB = require("./Models/Connection");
const ProductRoute = require("./Routes/ProductRoute");
//------- config ----------//
const app = express();
app.use(express.json());
app.use(cors());
env.config({ path: "./.env" });
app.listen(process.env.PORT, () => {
  console.log("app running on PORT :", process.env.PORT);
});
connectDB();
//------- Routes ----------//
app.use(ProductRoute);
