import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',

  // Set starting values
  setStartingValues: Ember.on('init', function() {
    var startingValues = this.getAttr('startingValues');
    var data = startingValues.getProperties('title', 'cover', 'category');

    // Set title, image on current Component
    this.setProperties(data);
  }),

  submit(ev) {
    ev.preventDefault();

    var data = this.getProperties('title', 'cover', 'category');

    this.sendAction('onsubmit', data);
  },

  actions: {
    selectCategory(category) {
      this.setProperties({category});
    },
  },
});
