import next from 'next';
import express from 'express';
import compression from 'compression';
// import jwt from 'express-jwt';
import bodyParser from 'body-parser';
import cors from 'cors';
import models from './models';
import apis from './api';
import routes from '../routes';

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

app.prepare().then(async () => {
  await models.sequelize.sync();
  express()
    .use(compression())
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use('/api', apis)
    .use(handler)
    .use((err, req, res, next) => {
      if (err.error && typeof err.error.errors === 'object') {
        next({ status: err.status, message: err.error.errors[0].message });
      } else {
        res.status(err.status || 500);
        res.json({ code: err.status || 500, message: err.message });
      }
    })
    /* eslint-disable-line */ .use((err, req, res, next) => {
      res.status(err.status || 500);
      res.json({ code: err.status || 500, message: err.message });
    })
    .listen(3000);
});

// server.get('*.js', (req, res, next) => {
//   req.url = req.url + '.gz';
//   res.set('Content-Encoding', 'gzip');
//   res.set('Content-Type', 'text/javascript');
//   next();
// });

// server.get('/robots.txt', (req, res) => {
//   res.type('text/plain');
//   res.send('User-agent: *\nAllow: /');
// });
