const axios = require("axios");

function prixTotal(produits) {
  let total = 0;
  for (let t = 0; t < produits.length; ++t) {
    total += produits[t].prix;
  }
  return total;
}

async function httpRequest(ids) {
  try {
    const response = await axios.post(
      process.env.PRODUCT_URL,
      { ids: ids },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    //appel de la fonction prixTotal pour calculer le prix total de la commande en se basant sur le résultat de la requête http
    return prixTotal(response.data);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  prixTotal,
  httpRequest,
};
