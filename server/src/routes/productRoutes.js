const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

// Product Routes
router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);
router.post('/', ProductController.createProduct);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);
router.post('/import', ProductController.importProductsCSV); // CSV import
router.get('/search', ProductController.searchProduct); // Search functionality

module.exports = router;
