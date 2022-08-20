const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
    {
        productId: { type: String, required: true },
        category: { type: String, required: true },
        brand: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('products', Product)