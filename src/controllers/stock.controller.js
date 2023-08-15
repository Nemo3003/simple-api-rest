
const{ pool } = require('../db/database.js')

const seeStock = (req, res) => {
    const sql = 'SELECT id, Quantity, unlimitedQuantity, warehouseId, dateUtcOnBalanceSystem FROM ECV_STOCK_INNEW';
  
    pool.query(sql, (err, result) => {
      if (err) {
        res.status(500).send(err.message);
        return;
      }
      res.send(result);
    });
  }

module.exports = seeStock