import DS from 'ember-data';

/**
 * Project Model
 */
export default DS.Model.extend({
  title: DS.attr('string'),
  cover: DS.attr('string'),
  category: DS.attr('string', {defaultValue: 'comics'}),

  /**
   * This project has many tiles
   */
  tiles: DS.hasMany('tile', {async: true}),
});
