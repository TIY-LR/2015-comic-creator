import Ember from 'ember';

export default Ember.Route.extend({
  tileService: Ember.inject.service('projects.tiles'),

  actions: {
    addTile(project) {
      var tileService = this.get('tileService');

      if (this.get('tileService').currentlyEditingNew()) {
        return;
      }

      var tile = this.store.createRecord('tile');

      tileService.set('currentlyEditing', tile);

      project.get('tiles').pushObject(tile);
    },
  },
});
