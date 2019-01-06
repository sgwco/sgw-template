import { Router } from 'express';
import { keyBy } from 'lodash';
import models from '../../../models';
import { TEMPLATE_PER_PAGE } from '../../../commons/const';
import { takeScreenshot } from '../../../commons/utils-server';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
});

router.get('/:url', async (req, res, next) => {
  try {
    let url = req.param('url');
    url = url.replace(/-/g, '.');
    const template = await models.templates.findOne({ where: { url }, raw: true });
    res.json(template);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    let { name, url, category, price } = req.body;
    url = url.replace(/(https|http|:|\/)/g, '');
    const categoryJoined = category.join(',');
    const template = await models.templates.create({
      name,
      url,
      category: categoryJoined,
      price,
    });
    await takeScreenshot(url);
    res.json(template);
  } catch (error) {
    next({ status: 401, error });
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
          await takeScreenshot(rest[key]);
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
    next({ status: 401, error });
  }
});

router.delete('/', async (req, res, next) => {
  try {
    const { id } = req.query;
    await models.templates.destroy({ where: { id } });
    res.json(id);
  } catch (error) {
    next({ status: 401, error });
  }
});

export default router;
