/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Endpoints modules
const apiLogin = require('./backend/authentication/login');
const apiMe = require('./backend/authentication/me');
const apiLogout = require('./backend/authentication/logout');
const apiHomepage = require('./backend/pages/homepage');
const apiGamesList = require('./backend/pages/gamesList');
const apiAdminUsers = require('./backend/pages/adminUsers');

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json({ limit: '50mb' }));
    server.use(bodyParser.urlencoded({ limit: '50mb' }));
    server.use(bodyParser.json());
    server.use(
      bodyParser.urlencoded({
        extended: true,
      }),
    );
    server.use(cookieParser());
    server.use(
      session({
        key: 'user_sid',
        secret: 'random',
        resave: false,
        saveUninitialized: true,
        cookie: {
          httpOnly: false,
        },
      }),
    );

    server.post('/api/login', apiLogin);
    server.post('/api/me', apiMe);
    server.post('/api/logout', apiLogout);
    server.post('/api/homepage', apiHomepage);
    server.post('/api/gamesList', apiGamesList);
    server.post('/api/adminUsers', apiAdminUsers);

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
