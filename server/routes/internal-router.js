const express = require('express')

const ProductCtrl = require('../controllers/product-ctrl')
const ShopperCtrl = require('../controllers/shopper-ctrl')

const router = express.Router()

router.post('/product', ProductCtrl.createProduct) //http://localhost:3000/iapi/product POST

router.post('/shopper', ShopperCtrl.createShopper) //http://localhost:3000/iapi/shopper POST

module.exports = router