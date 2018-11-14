// Initializes the `groups` service on path `/groups`
const createService = require('feathers-mongoose');
const createModel = require('../../models/groups.model');
const hooks = require('./groups.hooks');
const perms = require('./groups.perms');

module.exports = function (app) {
  perms(app);
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/groups', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('groups');

  service.hooks(hooks);
};
