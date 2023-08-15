
const{ pool } = require('../db/database.js')

const seePrices = (req, res) => {
    const sql = 'SELECT id,price_47, Price_56, deal_wh_92, deal_wh_103 FROM ECV_PRICE_INNEW';
  
    pool.query(sql, (err, result) => {
      if (err) {
        res.status(500).send(err.message);
        return;
      }
      res.send(result);
    });
  }

module.exports = seePrices