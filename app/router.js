import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('category');
  this.route('listing', {path: '/listing/:listing_id'});
  this.route('new-listing', {});
  this.route('new-listing-notice', {});
});

export default Router;
