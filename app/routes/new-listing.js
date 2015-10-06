import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(params) {
      var newListing = this.store.createRecord('listing', params);
      newListing.save();
      this.transitionTo('new-listing-notice');
    }
  }
});
