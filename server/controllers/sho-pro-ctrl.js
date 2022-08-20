const Shopper = require('../models/shopper-model')
const Product = require('../models/product-model')

getProductsByShopper = async (req, res) => {
    try {
        let limit = 10
        if (req.params.limit !== undefined) {
            limit = req.params.limit
            if (limit > 100) {
                limit = 100;
            }
        }
        const shopper = await Shopper.findOne({ shopperId: req.params.id }).exec()
        if (!shopper || !shopper.shelf) {
            return res.status(404).json({ success: false, error: 'no such shopper' })
        }

        let productsIDs = shopper.shelf.map(({ productId }) => productId)
        if (!productsIDs) {
            return res.status(404).json({ success: false, error: 'no products for this shopper' })
        }
        
        //http://localhost:3000/eapi/pbys/S-1000
        //http://localhost:3000/eapi/pbys/S-1000/1
        if (req.params.category === undefined) {
            const products = await Product.find( { 
                'productId': { $in: productsIDs}
            }).limit(limit).exec();
            return res.status(200).json({ success: true, data: products })
        }
        //http://localhost:3000/eapi/pbys/S-1000/1/Milk
        if (req.params.brand === undefined) {
            const products = await Product.find( { 
                'productId':  { $in: productsIDs},
                'category':  req.params.category
            }).limit(limit).exec();
            return res.status(200).json({ success: true, data: products })
        }
        //http://localhost:3000/eapi/pbys/S-1000/3/Milk/Dairylounge
        const products = await Product.find( { 
            'productId':  { $in: productsIDs},
            'category':  req.params.category,
            'brand':  req.params.brand
        }).limit(limit).exec();
        return res.status(200).json({ success: true, data: products })

    } catch(err) {
        return res.status(404).json({ success: false, error: err })
    }
}

getByShoppersByProduct = async (req, res) => {
    try {
        let limit = 10
        if (req.params.limit !== undefined) {
            limit = req.params.limit
            if (limit > 100) {
                limit = 100;
            }
        }
        //http://localhost:3000/eapi/sbyp/MB-2093193398
        //http://localhost:3000/eapi/sbyp/MB-2093193398/1
        const shopper = await Shopper.find( { 
            'shelf.productId': req.params.id 
        }).limit(limit).exec();

        if (shopper.length === 0) {
            return res.status(404).json({ success: false, error: 'no such shopper' })
        }
        return res.status(200).json({ success: true, data: shopper })

    } catch(err) {
        return res.status(404).json({ success: false, error: err })
    }
}

module.exports = {
    getProductsByShopper,
    getByShoppersByProduct
}