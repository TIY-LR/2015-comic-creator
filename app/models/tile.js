import DS from 'ember-data';

export default DS.Model.extend({
  /**
   * Properties for our model
   */
  edit: DS.attr('edit'),
  delete: DS.attr('delete'),

  /**
   * Set up the relationship to a project
   */
  project: DS.belongsTo('project'),
});
