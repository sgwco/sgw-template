import { Router } from 'express';
import { keyBy } from 'lodash';
import models from '../../models';
import { TEMPLATE_PER_PAGE } from '../../commons/const';
import { takeScreenshot } from '../../commons/utils-server';

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

router.patch('/', async (req, res, next) => {
  try {
    const { id, ...rest } = req.body;
    let template = await models.templates.findOne({ where: { id } });
    if (!template) throw { status: 404, error: 'Không thể tìm thấy template.' };

    const keys = Object.keys(rest);
    for (let i = 0; i < keys.length; ++i) {
      const key = keys[i];
      switch (key) {
        case 'url': {
          rest[key] = rest[key].replace(/(https|http|:|\/)/g, '');
          rest.thumbnail = await takeScreenshot(rest[key], rest[key] + '.webp');
          break;
        }
        case 'category':
          rest[key] = rest[key].join(',');
          break;
      }
    }

    await template.update({ ...rest });
    res.json(template);
  } catch (error) {
    next({ status: error.status || 401, error: error.message });
  }
});

router.delete('/', async (req, res, next) => {
  try {
    const { id } = req.body;
    await models.templates.destroy({ where: { id } });
    res.json(id);
  } catch (error) {
    next({ status: error.status || 401, error: error.message });
  }
});

export default router;
