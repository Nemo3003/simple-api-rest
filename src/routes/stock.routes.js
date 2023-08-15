
const seeStock = require('../controllers/stock.controller')
const Router = require('express')
const router = Router();


router.get('/stock', seeStock)

module.exports = router;