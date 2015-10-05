import Ember from 'ember';

export function formatDate(params) {
  var date = params[0]; // date is the zeroth param. something else could be the first, etc: params[1]. It's best only to have one or two.
  return moment(date).format('LL');
}

export default Ember.Helper.helper(formatDate);
