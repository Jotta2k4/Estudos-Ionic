const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'SUA_SENHA_AQUI',
  database: 'controle_atendimento',
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool;
