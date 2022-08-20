const express = require('express')

const ShopperProductCtrl = require('../controllers/sho-pro-ctrl')

const router = express.Router()

router.get('/pbys/:id/:limit?/:category?/:brand?', ShopperProductCtrl.getProductsByShopper)
router.get('/sbyp/:id/:limit?', ShopperProductCtrl.getByShoppersByProduct)


module.exports = router