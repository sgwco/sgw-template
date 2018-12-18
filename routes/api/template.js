import { Router } from 'express';
import { keyBy } from 'lodash';
import models from '../../models';
import { TEMPLATE_PER_PAGE } from '../../commons/const';

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

export default router;
