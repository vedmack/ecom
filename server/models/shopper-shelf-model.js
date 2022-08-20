const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ShopperShelf = new Schema(
    {
        productId: { type: String, required: true },
        relevancyScore: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('shopperShelfs', ShopperShelf)