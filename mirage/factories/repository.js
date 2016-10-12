import { Factory, faker } from 'ember-cli-mirage';
const {
  name: {
    firstName : first,
    lastName  : last
  },
  commerce: {
    color
  },
  lorem: {
    paragraph
  }
} = faker
export default Factory.extend({
  id () {
    return `${first().toLowerCase()}-${color()}-${last().toLowerCase()}@0.0.1`
  },
  description () {
    return paragraph()
  },
  name () {
    return this.id
  },
  source: 'GitHub',
  user () {
    return `${first().toLowerCase()}${last().toLowerCase()}`
  },
  link () {
    return `http://github.com/${this.user}/${this.id}`
  },
  version: "0.0.1"
});
