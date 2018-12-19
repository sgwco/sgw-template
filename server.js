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
      cookie: { maxAge: 8 * 60 * 60 * 1000 },
    })
  );
  server.use(passport.initialize());
  server.use(passport.session());

  // koaApi.get('/import', async ctx => {
  //   for (let i = 0; i < files.length; ++i) {
  //     await models.templates.create({
  //       name: files[i].Name,
  //       price: 1000,
  //       url: files[i].Name,
  //       category: WEB_CATEGORY.KHAC,
  //       thumbnail:
  //         'http://thietkewebchuyennghiep.edu.vn/wp-content/uploads/2018/05/giao-dien-web-ban-luoi-che-nang1-300x386.jpg',
  //     });
  //   }
  //   ctx.body = true;
  // });

  server.use('/api', apiRoutes);
  homeRoutes(server, app);
  adminRoutes(server, app);

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
