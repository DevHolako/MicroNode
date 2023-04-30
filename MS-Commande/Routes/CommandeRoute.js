//------- imports ----------//
const express = require("express");
const router = express.Router();

//------- Functions ----------//
const {
  AddCommande,
  GetCommandes,
} = require("../Controllers/CommandeController");

//------- Routes ----------//

router.get("/commandes", GetCommandes);
router.post("/commande/ajouter", AddCommande);

module.exports = router;
