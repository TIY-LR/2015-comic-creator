import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tile',

  classNames: ['mdl-cell mdl-cell--4-col mdl-cell--2-col-phone'],

  tile: null,

  editing: false,

  recomputeEditing: Ember.on('didReceiveAttrs', function() {
    var isEditing = this.get('tile.id') === this.get('currentlyEditing.id');

    this.set('editing', isEditing);
  }),

  actions: {
    delete(tile) {
      tile.destroyRecord();
    },

    saveTile(tile) {
      tile.save();

      // Tell the route we are done editing
      this.sendAction('onSave');
    },
  },
});
