/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const { queryPromise } = require('../utils');

module.exports = (req, res) => {
  const response = {};

  queryPromise(`SELECT game_id, game_title, game_release_date, game_cover
      FROM games
      WHERE game_release_date <= CURDATE()
      ORDER BY game_release_date DESC
      LIMIT 10`)
    .then(({ err, rows }) => {
      response.latestReleasesGames = rows;

      return queryPromise(`SELECT games.game_title, games_dlc.dlc_id, games_dlc.dlc_name, games_dlc.dlc_date, games_dlc.dlc_cover
        FROM games, games_dlc
        WHERE games.game_id = games_dlc.dlc_id_game
        AND games_dlc.dlc_date <= CURDATE()
        ORDER BY games_dlc.dlc_date DESC
        LIMIT 10`);
    })
    .then(({ err, rows }) => {
      response.latestReleasesDlc = rows;

      return queryPromise(
        `SELECT user_id, user_login, user_avatar, user_gender FROM users ORDER BY user_register_date LIMIT 20`,
      );
    })
    .then(({ err, rows }) => {
      response.latestUsers = rows;

      return queryPromise(`SELECT * FROM articles ORDER BY article_id DESC LIMIT 5`);
      res.json(response);
    })
    .then(({ err, rows }) => {
      response.latestArticles = rows;

      res.json(response);
    });
};
