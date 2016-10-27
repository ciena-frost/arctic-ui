import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany
} = DS

export default DS.Model.extend({
  name: attr('string'),
  version: attr('string'),
  repository: DS.belongsTo('repository', {
    inverse: 'versions'
  }),
  dependencies: hasMany('dependency', {
    inverse: null
  }),
  devdependencies: hasMany('dependency', {
    inverse: null
  }),
});
