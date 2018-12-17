import express from 'express';
import next from 'next';
import files from './files.json';
import { WEB_CATEGORY } from './commons/enum';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(async () => {
    const { default: models } = require('./models');

    const server = express();

    server.get('/bang-gia', (req, res) => {
      const actualPage = '/price';
      app.render(req, res, actualPage);
    });

    server.get('/import', async (req, res) => {
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

      res.json(true);
    });

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
