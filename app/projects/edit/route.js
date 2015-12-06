import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createNewProject(data) {
      var project = this.modelFor('projects.edit');

      project.setProperties(data);

      project.save().then(() => {

        this.transitionTo('projects.tiles', project);
      });
    },
  },
});
