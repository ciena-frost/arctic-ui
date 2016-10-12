import Ember from 'ember';

const {
  Route,
  get
} = Ember

export default Route.extend({
  model: function(params) {
    var repo = this.store.find('repository', params.id);
    return repo
  }
})
