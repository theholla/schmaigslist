import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },

  actions: {
    save(params, category) {
      var newListing = this.store.createRecord('listing', params);
       category.get('listings').addObject(newListing);
       newListing.save().then(function() {
         return category.save();
       });
      this.transitionTo('category', params.category_id);
    }
  }
});
