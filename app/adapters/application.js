import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://comiccreator.azurewebsites.net',
  namespace: 'api',
});
