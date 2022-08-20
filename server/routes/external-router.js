const express = require('express')

const ShopperProductCtrl = require('../controllers/sho-pro-ctrl')

const router = express.Router()

router.get('/pbys/:id/:limit?/:category?/:brand?', ShopperProductCtrl.getProductsByShopper) //http://localhost:3000/eapi/pbys/
router.get('/sbyp/:id/:limit?', ShopperProductCtrl.getByShoppersByProduct) //http://localhost:3000/eapi/sbyp/


module.exports = router