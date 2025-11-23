const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find().limit(10);
    res.status(200).json({ products });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getProducts };
