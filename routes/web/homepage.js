import { Router } from 'express';

const router = Router();

export default (server, app) => {
  router.get('/preview/:url', (req, res) => {
    const mergedQuery = Object.assign({}, req.query, req.params);
    app.render(req, res, '/preview', mergedQuery);
  });
  server.use('/', router);
  return router;
};
