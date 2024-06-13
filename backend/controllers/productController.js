const Product = require('../models/product');

exports.getAllProducts = (req, res) => {
  Product.getAll((err, products) => {
    if (err) res.status(500).send(err);
    res.json(products);
  });
};

exports.getProductById = (req, res) => {
  const { id } = req.params;
  Product.getById(id, (err, product) => {
    if (err) res.status(500).send(err);
    res.json(product);
  });
};

exports.createProduct = (req, res) => {
  const newProduct = req.body;
  Product.create(newProduct, (err, result) => {
    if (err) res.status(500).send(err);
    res.json({ id: result.insertId });
  });
};

exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  Product.update(id, updatedProduct, (err, result) => {
    if (err) res.status(500).send(err);
    res.json(result);
  });
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  Product.delete(id, (err, result) => {
    if (err) res.status(500).send(err);
    res.json(result);
  });
};
