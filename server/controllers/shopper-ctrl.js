const Shopper = require('../models/shopper-model')
const Product = require('../models/product-model')

createShopper = (req, res) => {
    const body = req.body
    
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a shopper',
        })
    }

    const shopper = new Shopper(body)

    if (!shopper) {
        return res.status(400).json({ success: false, error: err })
    }

    shopper
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'Shopper created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Shopper not created!',
            })
        })
}

getShopperById = async (req, res) => {
    await Shopper.findOne({ shopperId: req.params.id }, (err, shopper) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!shopper) {
            return res
                .status(404)
                .json({ success: false, error: `Shopper not found` })
        }
        return res.status(200).json({ success: true, data: shopper })
    }).catch(err => console.log(err))
}

getShoppers = async (req, res) => {
    await Shopper.find({}, (err, shoppers) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!shoppers.length) {
            return res
                .status(404)
                .json({ success: false, error: `Shopper not found` })
        }
        return res.status(200).json({ success: true, data: shoppers })
    }).catch(err => console.log(err))
}

module.exports = {
    createShopper,
    getShoppers,
    getShopperById
}