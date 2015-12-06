import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('projects', {path: '/'}, function() {
    this.route('new');
    this.route('edit', {path: '/:project_id/edit'});

    this.route('tiles', {path: '/:project_id/tiles'}, function() {
      this.route('edit', {path: '/:tile_id'});
    });
  });
});

export default Router;
