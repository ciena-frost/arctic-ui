import DS from 'ember-data';

const {
  Mode,
  attr,
  hasMany
} = DS

export default Model.extend({
  name: attr('string'),
  repos: hasMany('repositories')
})
