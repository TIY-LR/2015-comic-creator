import DS from 'ember-data';

export default DS.Model.extend({
  /**
   * Properties for our model
   */
  url: DS.attr('string'),
  caption: DS.attr('string'),
  orderNumber: DS.attr('number', {defaultValue: 0}),

  /**
   * Set up the relationship to a project
   */
  project: DS.belongsTo('project'),
});
