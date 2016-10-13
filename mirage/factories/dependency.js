import { Factory, faker } from 'ember-cli-mirage';
const {
  name: {
    firstName : first,
    lastName  : last
  },
  commerce: {
    color
  }
} = faker
export default Factory.extend({
  id () {
    return `${first().toLowerCase()}-${color()}-${last().toLowerCase()}@0.0.1`
  },
  version () {
    return '0.0.1'
  }
});
