const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    prodName: String,
    prodImage: String,
    prodCost: String,
}, { timestamps: true })

module.exports = mongoose.model("Products", ProductSchema)