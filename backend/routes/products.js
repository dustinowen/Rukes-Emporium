const express = require('express')
const router = express.Router()

const productCtrl = require('../controllers/productsController')

// ROUTES TO PLAN:
// - Index (GET)
// - Show (GET)

router.get('/', productCtrl.index)

router.get('/:id', productCtrl.show)

module.exports = router