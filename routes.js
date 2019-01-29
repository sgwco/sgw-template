const routes = require('next-routes')();

module.exports = routes;

routes.add('preview', '/preview/:id').add('admin');
