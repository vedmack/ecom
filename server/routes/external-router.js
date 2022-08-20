const express = require('express')

const ShopperProductCtrl = require('../controllers/sho-pro-ctrl')
const ProductCtrl = require('../controllers/product-ctrl')
const ShopperCtrl = require('../controllers/shopper-ctrl')

const router = express.Router()

router.get('/pbys/:id/:limit?/:category?/:brand?', ShopperProductCtrl.getProductsByShopper) //http://localhost:3000/eapi/pbys/
router.get('/sbyp/:id/:limit?', ShopperProductCtrl.getByShoppersByProduct) //http://localhost:3000/eapi/sbyp/

router.get('/products', ProductCtrl.getProducts) //http://localhost:3000/eapi/products
router.get('/shoppers', ShopperCtrl.getShoppers) //http://localhost:3000/eapi/shoppers


module.exports = router