const Commande = require("../Models/Commande");
const { httpRequest } = require("../Helpers/index");
const GetCommandes = async (req, res) => {
  try {
    const Commandes = await Commande.find();
    res.status(200).json({
      success: true,
      count: Commandes.length,
      Commandes,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const AddCommande = async (req, res, next) => {
  // Création d'une nouvelle commande dans la collection commande
  const { ids, email_utilisateur } = req.body;
  httpRequest(req.body.ids).then((total) => {
    const newCommande = new Commande({
      produits: ids,
      email_utilisateur: email_utilisateur,
      prix_total: total,
    });
    newCommande
      .save()
      .then((commande) => res.status(201).json(commande))
      .catch((error) => res.status(400).json({ error }));
  });
};

module.exports = { AddCommande, GetCommandes };
