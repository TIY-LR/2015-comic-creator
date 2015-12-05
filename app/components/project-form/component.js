import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',

  // Set starting values
  setStartingValues: Ember.on('init', function() {
    var startingValues = this.getAttr('startingValues');
    var data = startingValues.getProperties('title', 'img');

    // Set title, image on current Component
    this.setProperties(data);
  }),

  submit(ev) {
    ev.preventDefault();

    var data = this.getProperties('title', 'img');

    this.sendAction('onsubmit', data);
  },
});
