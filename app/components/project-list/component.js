import Ember from 'ember';

export default Ember.Component.extend({
  filteredProjects: [],

  calculateFilteredProjects: Ember.on('didReceiveAttrs', function() {
    var allProjects = this.getAttr('projects');
    var category = this.getAttr('category');

    var filteredProjects = allProjects.filterBy('category', category);

    this.setProperties({filteredProjects});
  }),
});
