import Ember from 'ember'

const {
  Route,
  get
} = Ember
export default Route.extend({
  actions: {
    add () {
      var link = (this.get('controller').get('repolink'))
      get(this, 'store').createRecord('repository', {link}).save()
    }
  }
});
