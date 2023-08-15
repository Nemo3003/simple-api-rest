const express = require('express');
const router = express.Router();

const prices = require('./prices.routes')
const stock = require('./stock.routes')


router.use('/', prices)
router.use('/', stock)

module.exports = router;