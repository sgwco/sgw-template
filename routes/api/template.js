import { Router } from 'express';
import { keyBy } from 'lodash';
import models from '../../models';
import { TEMPLATE_PER_PAGE } from '../../commons/const';
import { takeScreenshot } from '../../config/puppeteer';

const router = Router();

router.get('/', async (req, res) => {
  const { page } = req.query;
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
  res.json(templateConvertedToObject);
});

router.post('/', async (req, res, next) => {
  try {
    let { name, url, category, price } = req.body;
    url = url.replace(/(https|http|:|\/)/g, '');
    const categoryJoined = category.join(',');
    const path = await takeScreenshot(url, url + '.webp');

    const template = await models.templates.create({
      name,
      url,
      category: categoryJoined,
      price,
      thumbnail: path,
    });
    res.json(template);
  } catch (error) {
    next({ status: 401, error: error.message });
  }
});

export default router;
