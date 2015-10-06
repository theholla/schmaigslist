import Ember from 'ember';

export function cities() {
  var cities = require('cities');
  return cities;
}

export default Ember.Helper.helper(cities);
