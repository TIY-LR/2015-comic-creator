import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('projects', {path: '/'}, function() {
    this.route('edit');
    this.route('new');
  });
});

export default Router;
