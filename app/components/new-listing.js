import Ember from 'ember';

export default Ember.Component.extend({
  newListing: false,
  actions: {
    newListingFormShow() {
      this.set('newListing', true);
    },

    save() {
      var params = {
        type: this.get('type'),
        category: this.get('category'),
        location: this.get('location'),
        contactPhone: this.get('contactPhone'),
        contactName: this.get('contactName'),
        title: this.get('title'),
        specificLocation: this.get('specificLocation'),
        zip: this.get('zip'),
        body: this.get('body'),
        date: Date.now()
      };
      this.set('newListing', false),
      this.sendAction('save', params);
    }
  }
});
