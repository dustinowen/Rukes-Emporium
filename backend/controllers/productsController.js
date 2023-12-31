const { Products } = require('../models')
console.log(Products)

module.exports = {
    index,
    show,
}

async function index(req, res) {
    try {
        res.status(200).json(await Products.find())
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

async function show(req, res) {
    try {
        res.status(201).json(await Products.findById(req.params.id))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}