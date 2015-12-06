import Ember from 'ember';

export default Ember.Controller.extend({
  tileService: Ember.inject.service('projects.tiles'),
});
