import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany
} = DS

export default Model.extend({
  link: attr('string'),
  user: attr('string'),
  name: attr('string'),
  version: attr('string'),
  description: attr('string'),
  dependencies: hasMany('dependency', {
    async: true,
    inverse: false
  })
})
