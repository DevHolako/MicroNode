const moment = require("moment/moment");
const mongoose = require("mongoose");

const ProduitSchema = mongoose.Schema({
  nom: {
    type: String,
    require: true,
    trim: true,
  },
  description: {
    type: String,
    require: true,
    trim: true,
  },
  prix: {
    type: Number,
    require: true,
  },
  created_at: {
    type: String,
    default: moment().format("D-MM-YYYY"),
  },
});

const Produit = mongoose.model("Produit", ProduitSchema);
module.exports = Produit;
