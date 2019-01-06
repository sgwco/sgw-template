import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import models from '../models';

import apiRoutes from './routes/api';

models.sequelize.sync().then(() => {
  const server = express();
  if (process.env.NODE_ENV === 'development') {
    const morgan = require('morgan');
    server.use(morgan('dev'));
  }
  server.use(cors());
  server.use('/static', express.static(path.join(__dirname, '../static')));
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use('/api', apiRoutes);

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

  server.listen(55554, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:55554');
  });
});
