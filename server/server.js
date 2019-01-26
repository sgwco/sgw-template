import path from 'path';
import express from 'express';
// import jwt from 'express-jwt';
import bodyParser from 'body-parser';
import cors from 'cors';
import models from './models';
import apis from './api';

models.sequelize.sync().then(() => {
  const server = express();
  if (process.env.NODE_ENV === 'development') {
    const morgan = require('morgan');
    server.use(morgan('dev'));
  }
  server.use(cors());
  // const secured = jwt({
  //   secret: process.env.JWT_SECRET,
  // });

  if (process.env.NODE_ENV === 'production') {
    server.use('/static', express.static(path.join(__dirname, '../../static')));
    server.use('/', express.static(path.join(__dirname, '../client')));
  } else {
    server.use('/static', express.static(path.join(__dirname, '../static')));
  }
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use('/api', apis);

  server.use((err, req, res, next) => {
    if (err.error && typeof err.error.errors === 'object') {
      next({ status: err.status, message: err.error.errors[0].message });
    } else {
      res.status(err.status || 500);
      res.json({ code: err.status || 500, message: err.message });
    }
  });

  /* eslint-disable-line */ server.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ code: err.status || 500, message: err.message });
  });

  if (process.env.NODE_ENV === 'production') {
    server.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/index.html'));
    });
  }

  server.listen(55554, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:55554'); // eslint-disable-line
  });
});
