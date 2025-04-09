const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'rocketbank18'
});
module.exports = connection;