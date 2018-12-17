import Router from 'koa-router';
import templateRouter from './template';

const router = new Router({ prefix: '/api' });

router.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.status = error.status || 500;
    let message = error.message;
    if (error.errors) {
      message = error.errors[0].message;
    }
    ctx.body = {
      status: error.status || 500,
      message,
    };
  }
});

router.use(templateRouter.routes());

export default router;
