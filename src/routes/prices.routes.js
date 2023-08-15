
const seePrices = require('../controllers/prices.controllers')
const Router = require('express')
const router = Router();

router.get('/prices', seePrices)

module.exports = router;