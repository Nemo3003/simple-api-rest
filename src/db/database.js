const mysql = require('mysql2/promise')

try{
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database:"guataporafake",
    port: 3306,

})
module.exports = pool
}
catch(err){
  throw new Error(err)
}
