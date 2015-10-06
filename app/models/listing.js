import DS from 'ember-data';

export default DS.Model.extend({
    /* category */
    type: DS.attr(), //type should later belong to type
    category: DS.belongsTo('category', {async: true}),
    location: DS.attr(), // perhaps all will be in oregon cities to start with

    /* contact */
    contactPhone: DS.attr(),
    contactName: DS.attr(),

    /* post details */
    title: DS.attr(),
    specificLocation: DS.attr(),
    zip: DS.attr(),
    body: DS.attr(),

    /* TODO: integrate specific post details depending on category? */
    /* TODO: integrate maps? */
});
