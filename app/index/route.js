import Ember from 'ember'

const {
  Route,
  get
} = Ember
export default Route.extend({
  model () {
    return get(this, 'store').findAll('repository');
	},
  actions: {
    add () {
      var link = (this.get('controller').get('repolink'))
      get(this, 'store').createRecord('repository', {link}).save()
    }
  }
});
