import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      listings: this.store.findAll('listing'),
      categories: this.store.findAll('category')
    });
  }
});
