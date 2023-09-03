const express = require('express')
const router = express.Router()

// ROUTES TO PLAN:
// - Index (GET)
// - Show (GET)

router.get('/', (req, res) => {
    res.status(200).json("hitting products index")
})

router.get('/:id', (req, res) => {
    res.status(200).json("hitting product ID index - product#: " + req.params.id)
})

module.exports = router
