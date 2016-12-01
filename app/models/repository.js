import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany
} = DS

export default Model.extend({
  version: attr('string'),
  link: attr('string'),
  organization: attr('string'),
  description: attr('string'),
  versions: hasMany('version', {
    inverse: 'repository'
  }),
})
