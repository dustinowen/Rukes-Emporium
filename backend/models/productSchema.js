const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    prodName: String,
    prodCategory: Number,
    prodImage: String,
    prodCost: Number,
    inStock: Boolean,
    leadTime: String
}, { timestamps: true })

module.exports = mongoose.model("Products", ProductSchema)