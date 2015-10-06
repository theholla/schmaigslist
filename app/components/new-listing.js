import Ember from 'ember';

export default Ember.Component.extend({
  newListing: false,
  actions: {
    save() {
      var params = {
        type: this.get('type') ? this.get('type') : "",
        category: this.get('category') ? this.get('category') : "",
        location: this.get('location') ? this.get('location') : "",
        contactPhone: this.get('contactPhone') ? this.get('contactPhone') : "",
        contactName: this.get('contactName') ? this.get('contactName') : "",
        title: this.get('title') ? this.get('title') : "",
        specificLocation: this.get('specificLocation') ? this.get('specificLocation') : "",
        zip: this.get('zip') ? this.get('zip') : "",
        body: this.get('body') ? this.get('body') : "",
        date: Date.now()
      };
      this.sendAction('save', params);
    }
  }
});
