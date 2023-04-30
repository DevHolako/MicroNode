const moment = require("moment/moment");
const mongoose = require("mongoose");
const CommandeSchema = mongoose.Schema({
  produits: {
    type: [String],
  },
  email_utilisateur: String,
  prix_total: Number,
  created_at: {
    type: String,
    default: moment().format("D-MM-YYYY"),
  },
});

const Commande = mongoose.model("commande", CommandeSchema);
module.exports = Commande;
