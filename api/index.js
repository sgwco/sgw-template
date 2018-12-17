import Router from 'koa-router';
import templateRouter from './template';

const router = new Router({ prefix: '/api' });

router.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    console.log(error);
  }
});

router.use(templateRouter.routes());

export default router;
