/* eslint-disable @typescript-eslint/no-var-requires */
const mysql = require('mysql');

const connectData = {
  host: 'localhost',
  user: 'games',
  password: 'games',
  database: 'games',
};

const connection = mysql.createConnection(connectData);
connection.connect();

module.exports = connection;
