import Ember from 'ember';

export default Ember.Route.extend({
  tileService: Ember.inject.service('projects.tiles'),

  afterModel(tile) {
    // Store something that says we should show the edit form for our current `tile`

    this.set('tileService.editingTile', tile);
  },
});
