const express = require("express");
const {getOrders, getOrder, createOrder, updateOrder, deleteOrder} = require('../controllers/orderController');
const router = express.Router();

router.get('/orders', getOrders);
router.get('/orders/product', getOrder);
router.post('/orders', createOrder);
router.put('/orders/:id',updateOrder);
router.delete('/orders/:id',deleteOrder);

module.exports = router;

