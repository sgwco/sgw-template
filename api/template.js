import Router from 'koa-router';
import { keyBy } from 'lodash';
import models from '../models';
import { TEMPLATE_PER_PAGE } from '../commons/const';

const router = new Router({ prefix: '/template' });

router.get('/', async ctx => {
  const { page } = ctx.query;
  let templates = null;
  if (page) {
    templates = await models.templates.findAll({
      offset: page * TEMPLATE_PER_PAGE,
      limit: TEMPLATE_PER_PAGE,
    });
  } else {
    templates = await models.templates.findAll();
  }
  const templateConvertedToObject = keyBy(templates, 'id');
  ctx.body = templateConvertedToObject;
});

export default router;
