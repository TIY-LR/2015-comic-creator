import DS from 'ember-data';

/**
 * Project Model
 */
export default DS.Model.extend({
  title: DS.attr('string'),
  cover: DS.attr('img'),

  /**
   * This project has many tiles
   */
  project: DS.hasMany('tiles', {async: true}),
});
