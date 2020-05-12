/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const connection = require('../database/connection');

module.exports = (req, res) => {
  const listSize = req.body.listSize;
  const response = {};

  const queryPromise = queryString =>
    new Promise(resolve => {
      connection.query(queryString, (err, rows) => {
        resolve({ err, rows });
      });
    });

  queryPromise(
    `
      SELECT *, COUNT(users_finished.finish_rating) AS countRatio, SUM(users_finished.finish_rating) AS sumRatio
      FROM games
      LEFT JOIN users_finished ON games.game_id = users_finished.finish_game_id
      GROUP BY games.game_id
      ORDER BY game_title ASC
      LIMIT ${listSize}
    `,
  ).then(({ err, rows }) => {
    response.games = rows;

    res.json(response);
  });
};
