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
      const link = (this.get('controller').get('newRepo'))
      get(this, 'store').createRecord('repository', {link}).save()
    }
  }
});
