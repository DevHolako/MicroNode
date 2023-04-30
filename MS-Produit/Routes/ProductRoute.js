//------- imports ----------//

const express = require("express");
const router = express.Router();

//------- Functions ----------//
const {
  AddProduct,
  BuyProduct,
  GetProducts,
} = require("../Controllers/ProductController");

//------- Routes ----------//

router.get("/produit", GetProducts);
router.post("/produit/acheter", BuyProduct);
router.post("/produit", AddProduct);

module.exports = router;
