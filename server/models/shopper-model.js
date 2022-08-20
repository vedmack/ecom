const mongoose = require('mongoose')
const ShopperShelf = require('./shopper-shelf-model')

const Schema = mongoose.Schema

const Shopper = new Schema(
    {
        shopperId: { type: String, required: true },
        shelf: { type: [ShopperShelf.schema], required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('shoppers', Shopper)