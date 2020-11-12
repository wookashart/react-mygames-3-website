/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const { queryPromise } = require('../utils');

module.exports = (req, res) => {
  const listSize = req.body.listSize;
  const page = req.body.page;
  const response = {};
  const filters = req.body.filters;

  const filtersGrouped = [
    filters.title && filters.title !== ''
      ? `(games.game_title LIKE CONCAT("%", "${filters.title}", "%") OR games.game_title_pl LIKE CONCAT("%", "${filters.title}", "%"))`
      : '',
    filters.category && filters.category !== '' ? `games.game_type LIKE CONCAT("%", "${filters.category}", "%")` : '',
    filters.platform && filters.platform !== ''
      ? `games.game_platform LIKE CONCAT("%", "${filters.platform}", "%")`
      : '',
    filters.producer && filters.producer !== '' ? `games.game_producer = "${filters.producer}"` : '',
    filters.publisher && filters.publisher !== '' ? `games.game_publisher = "${filters.publisher}"` : '',
  ];
  const cleanFiltersGrouped = filtersGrouped.filter(el => el !== '');

  queryPromise(
    `
      SELECT *, COUNT(users_finished.finish_rating) AS countRatio, SUM(users_finished.finish_rating) AS sumRatio
      FROM games
      LEFT JOIN users_finished ON games.game_id = users_finished.finish_game_id
      ${Object.values(filters).length > 0 ? 'WHERE ' : ''}
      ${cleanFiltersGrouped.join(' AND ')}
      GROUP BY games.game_id
      ORDER BY game_title ASC
      LIMIT ${listSize}
      OFFSET ${listSize * (page - 1)}
    `,
  )
    .then(({ err, rows }) => {
      response.games = rows;

      return queryPromise('SELECT COUNT(*) AS totalCount FROM games');
    })
    .then(({ err, rows }) => {
      response.totalCount = rows[0].totalCount;

      return queryPromise(`
        SELECT COUNT(*) AS filteredCount
        FROM games
        ${Object.values(filters).length > 0 ? 'WHERE ' : ''}
        ${cleanFiltersGrouped.join(' AND ')}
      `);
    })
    .then(({ err, rows }) => {
      response.filteredCount = rows[0].filteredCount;

      return queryPromise('SELECT game_producer FROM games GROUP BY game_producer ORDER BY game_producer');
    })
    .then(({ err, rows }) => {
      response.producers = rows.map(row => row.game_producer);

      return queryPromise('SELECT game_publisher FROM games GROUP BY game_publisher ORDER BY game_publisher');
    })
    .then(({ err, rows }) => {
      response.publishers = rows.map(row => row.game_publisher);

      return queryPromise('SELECT * FROM game_platform ORDER BY name');
    })
    .then(({ err, rows }) => {
      response.platforms = rows;

      res.json(response);
    });
};
