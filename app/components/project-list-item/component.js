import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tile',

  classNames: ['mdl-cell mdl-cell--4-col mdl-cell--2-col-phone'],

  actions: {
    delete(project) {
      project.destroyRecord();
    },
  },
});
