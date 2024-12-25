const express = require('express');
const router = express.Router();
const SaleController = require('../controllers/SaleController');

// Sale Routes
router.get('/', SaleController.getAllSales);
router.get('/:id', SaleController.getSaleById);
router.post('/', SaleController.createSale);
router.put('/:id', SaleController.updateSale);
router.delete('/:id', SaleController.deleteSale);
router.get('/filter', SaleController.filterSalesByDateRange); // Filter sales by date

module.exports = router;
