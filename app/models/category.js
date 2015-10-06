import DS from 'ember-data';

export default DS.Model.extend({
  categoryName: DS.attr(),
  listings: DS.hasMany('listings', { async: true })
});
