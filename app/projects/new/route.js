import Ember from 'ember';

export default Ember.Route.extend({
  tagName: 'title',
  tagName: 'img',

  // Set starting values
  setStartingValues: Ember.on('init', function() {
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
