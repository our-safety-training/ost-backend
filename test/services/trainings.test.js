const assert = require('assert');
const app = require('../../src/app');

describe('\'Trainings\' service', () => {
  it('registered the service', () => {
    const service = app.service('trainings');

    assert.ok(service, 'Registered the service');
  });
});
