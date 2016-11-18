import Ember from 'ember';
import RSVP from 'rsvp';

const {
  Route,
  get
} = Ember

export default Ember.Route.extend({
  model () {
    return RSVP.hash({
      repositories: get(this, 'store').findAll('repository'),
      versions: get(this, 'store').findAll('version'),
    })
  }
});
