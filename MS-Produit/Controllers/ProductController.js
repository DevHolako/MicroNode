//------- imports ----------//
const Product = require("../Models/Produit");

//------- get all the Products  ----------//
const GetProducts = async (req, res) => {
  try {
    const Products = await Product.find();
    res.status(200).json({
      success: true,
      count: Products.length,
      Products,
    });
  } catch (error) {
    console.error(err.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

//------- get a Product by id  ----------//
// const GetProduct = async (req, res) => {
//   const Product = await Product.findById(req.params.id);
//   res.json(Product);
// };

//------- add a Product to db  ----------//
const AddProduct = async (req, res) => {
  const { nom, description, prix } = req.body;
  const newProduit = new Product({
    nom,
    description,
    prix,
  });

  newProduit
    .save()
    .then((produit) => res.status(201).json(produit))
    .catch((error) => res.status(400).json({ error }));
};

//------- Buy a Product   ----------//
const BuyProduct = async (req, res) => {
  const { ids } = req.body;
  Product.find({ _id: { $in: ids } })
    .then((produits) => res.status(201).json(produits))
    .catch((error) => res.status(400).json({ error }));
};
//------- delete a Product by id   ----------//
// const DeletProduct = async (req, res) => {
//   try {
//     const Deleted = await Product.findByIdAndDelete(req.params.id);
//     res.status(200).json({
//       success: true,
//       message: "Product deleted successfly",
//     });
//   } catch (error) {
//     console.error(err.message);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// };

//------- Update a Product by id :   ----------//
// const UpdateProduct = async (req, res) => {
//   try {
//     const updated = await Product.findByIdAndUpdate(req.params.id, {
//       libélle: req.body.libélle,
//       catégorie: req.body.catégorie,
//       prix: req.body.prix,
//     });
//     res.status(200).json({
//       success: true,
//       message: "Product updated successfly",
//     });
//   } catch (error) {
//     console.error(err.message);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// };

module.exports = {
  AddProduct,
  BuyProduct,
  GetProducts,
};
