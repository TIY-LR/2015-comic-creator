import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('project');
  },

  actions: {
    createNewProject(data) {
      var project = this.modelFor('projects.new');

      project.setProperties(data);

      project.save().then(() => {

        this.transitionTo('projects.edit', project);
      });
    },
  },
});
