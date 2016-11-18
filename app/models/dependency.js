import DS from 'ember-data';

const {
  Model,
  attr
} = DS
export default Model.extend({
  name: attr('string'),
  version: attr('string'),
  compliant: attr('string')
})
