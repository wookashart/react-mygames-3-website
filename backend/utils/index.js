/* eslint-disable @typescript-eslint/no-var-requires */
const connection = require('../database/connection');

const queryPromise = queryString =>
  new Promise(resolve => {
    connection.query(queryString, (err, rows) => {
      resolve({ err, rows });
    });
  });

module.exports = {
  queryPromise,
};
