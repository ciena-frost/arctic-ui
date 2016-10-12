import DS from 'ember-data';
import ENV from '../config/environment'

const {
  JSONAPISerializer
} = DS

export default JSONAPISerializer.extend({
  primaryKey: '_id',
  serializeId (id) {
    return id.toString()
  }
})
