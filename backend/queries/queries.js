const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'AloneStoreDB',
  password: 'zxc',
  port: 5432,
})

module.exports = {
  pool,
}