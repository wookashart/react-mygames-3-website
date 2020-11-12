/* eslint-disable @typescript-eslint/no-var-requires */
const { queryPromise } = require('../utils');
const passwordHash = require('password-hash');

module.exports = (req, res) => {
  const userLogin = req.body.login;
  const userPassword = req.body.password;
  let userData;

  queryPromise('SELECT * FROM users').then(({ err, rows }) => {
    rows.map(user => {
      if (user.user_login === userLogin && passwordHash.verify(userPassword, user.user_password)) {
        userData = {
          login: user.user_login,
          email: user.user_email,
          id: user.user_id,
          type: user.user_type,
          gender: user.user_gender,
          avatar: user.user_avatar,
        };
        req.session.user = userData;
        req.session.logged = true;
      }
    });

    res.json({
      user: userData,
      error: err,
    });
  });
};
