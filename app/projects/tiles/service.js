import Ember from 'ember';

export default Ember.Service.extend({
  currentlyEditing: null,

  currentlyEditingNew() {
    return this.get('currentlyEditing.isNew');
  },
});
