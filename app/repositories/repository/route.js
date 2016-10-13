import Ember from 'ember';

const {
  Route,
  get
} = Ember

export default Route.extend({
  model (params) {
    return get(this, 'store').find('repository', params.id)
  }
})
