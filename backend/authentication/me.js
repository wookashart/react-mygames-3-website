/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const { queryPromise } = require('../utils');

module.exports = (req, res) => {
  if (req.session && req.session.user) {
    queryPromise(`SELECT * FROM users WHERE user_id="${req.session.user.id}"`).then(({ err, rows }) => {
      if (rows.length) {
        const user = rows[0];
        res.json({
          user: {
            login: user.user_login,
            email: user.user_email,
            id: user.user_id,
            type: user.user_type,
            gender: user.user_gender,
            avatar: user.user_avatar,
          },
        });
      } else {
        res.json({});
      }
    });
  } else {
    res.json({});
  }
};
