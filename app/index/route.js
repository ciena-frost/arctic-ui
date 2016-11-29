import Ember from 'ember'

const {
  Route,
  get
} = Ember
export default Route.extend({
  biggerSearch: function(){
    this.controllerFor('application').set('bigSearch', true)
  }.on('activate'),
  actions: {
    add () {
      var link = (this.get('controller').get('repolink'))
      get(this, 'store').createRecord('repository', {link}).save()
    }
  }
});
