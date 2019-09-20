const path = require('path');

const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');
const isAuth = require('../middleware/is-auth');

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', isAuth, shopController.getCart);

router.get('/orders', isAuth, shopController.getOrders);

router.post('/cart', isAuth, shopController.postCart);

router.post('/cart-delete-product', isAuth, shopController.postCartDeleteProduct);

router.get('/orders/:orderId', isAuth, shopController.getInvoice);

router.get('/checkout', isAuth, shopController.getCheckout);

router.get('/checkout/success', shopController.getCheckoutSuccess);

router.get('/checkout/cancel', shopController.getCheckout);

module.exports = router;