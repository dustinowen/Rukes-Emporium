const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    prodName: String,
    prodCategory: Number,
    prodImage: String,
    prodCost: Number,
}, { timestamps: true })

module.exports = mongoose.model("Products", ProductSchema)