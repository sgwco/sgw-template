import next from 'next';
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from './config/passport';
import models from './models';

import apiRoutes from './routes/api';
import homeRoutes from './routes/web/homepage';
import adminRoutes from './routes/web/admin';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, quiet: true });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  await models.sequelize.sync();

  const server = express();
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(
    session({
      secret: 'sgw-web-template-sonvh',
      saveUninitialized: true,
      resave: true,
    })
  );
  server.use(passport.initialize());
  server.use(passport.session());

  server.use('/api', apiRoutes);
  homeRoutes(server, app);
  adminRoutes(server, app);

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.use((err, req, res, next) => {
    if (typeof err.error.errors === 'object') {
      next({ status: err.status, message: err.error.errors[0].message });
    } else {
      res.status(err.status || 500);
      res.json({ code: err.status || 500, message: err.message });
    }
  });

  server.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ code: err.status || 500, message: err.message });
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
