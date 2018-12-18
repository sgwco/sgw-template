import { Router } from 'express';
import passport from '../../config/passport';

const router = Router();
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/admin/login');
  }
};

export default (server, app) => {
  router.post(
    '/login',
    passport.authenticate('local', { successRedirect: '/admin', failureRedirect: '/admin/login' })
  );
  router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
  router.get('/', isAuthenticated, (req, res) => {
    app.render(req, res, '/admin', null);
  });
  router.get('/web-template', isAuthenticated, (req, res) => {
    app.render(req, res, '/admin/web-template', null);
  });
  server.use('/admin', router);
  return router;
};
