import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login')

  this.route('repositories', function () {
    this.route('repository', {path: ':id'}, function () {
      this.route('info')
    })
  })
  this.route('add');
  this.route('dashboard');
});

export default Router;
