const express = require('express');

const { 
    handleCreateProduct,
    handleGetAllProducts,
    handleGetProductsById,
    handleUpdateProductById,
    handleDeleteProductsById,
} = require('../controllers/product.controller')

const router = express.Router();

router.post('/', handleCreateProduct)
router.get('/', handleGetAllProducts)
router.get('/:id', handleGetProductsById)
router.delete('/:id', handleDeleteProductsById)
router.put('/:id', handleUpdateProductById)

module.exports = {productRouter:router}