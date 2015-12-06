import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tile',

  classNames: ['mdl-cell mdl-cell--4-col mdl-cell--2-col-phone'],

  tileService: Ember.inject.service('projects.tiles'),
  tile: null,

  editing: Ember.computed('tile.id', 'tileService.editingTile.id', function() {
    return this.get('tile.id') === this.get('tileService.editingTile.id');
  }),

  actions: {
    delete(tile) {
      tile.destroyRecord();
    },
  },
});
