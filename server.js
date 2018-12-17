import next from 'next';
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import models from './models';
import routes from './api';
import files from './files.json';
import { WEB_CATEGORY } from './commons/enum';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, quiet: true });
const handle = app.getRequestHandler();
const koaWebApp = new Koa();
const koaWebRouter = new Router();
koaWebApp.use(bodyParser());

app.prepare().then(async () => {
  await models.sequelize.sync();

  koaWebRouter.get('/bang-gia', async ctx => {
    const actualPage = '/price';
    await app.render(ctx.req, ctx.res, actualPage);
    ctx.respond = false;
  });

  koaWebRouter.get('/import', async ctx => {
    for (let i = 0; i < files.length; ++i) {
      await models.templates.create({
        name: files[i].Name,
        price: 1000,
        url: files[i].Name,
        category: WEB_CATEGORY.KHAC,
        thumbnail:
          'http://thietkewebchuyennghiep.edu.vn/wp-content/uploads/2018/05/giao-dien-web-ban-luoi-che-nang1-300x386.jpg',
      });
    }

    ctx.body = true;
  });

  koaWebRouter.use(routes.routes());

  koaWebRouter.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  koaWebApp.use(koaWebRouter.routes());
  koaWebApp.listen(3000);
  console.log('> Ready on http://localhost:3000');
});
