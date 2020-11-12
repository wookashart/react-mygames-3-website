/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const { queryPromise } = require('../utils');

module.exports = (req, res) => {
  const listSize = req.body.listSize;
  const page = req.body.page;
  const response = {};

  queryPromise(`
    SELECT
      user_avatar,
      user_city,
      user_date,
      user_description,
      user_email,
      user_gender,
      user_id,
      user_login,
      user_register_date,
      user_type
    FROM users
    ORDER BY user_login ASC
    LIMIT ${listSize}
    OFFSET ${listSize * (page - 1)}
  `)
    .then(({ err, rows }) => {
      response.users = rows;

      return queryPromise(`
        SELECT COUNT(*) AS filteredCount
        FROM users
      `);
    })
    .then(({ err, rows }) => {
      response.filteredCount = rows[0].filteredCount;

      res.json(response);
    });
};
