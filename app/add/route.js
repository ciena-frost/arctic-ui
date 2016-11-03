import Ember from 'ember'

const {
  Route,
  get
} = Ember
export default Route.extend({
  newRepo: null,
  actions: {
    add: function(){
      var link = (this.get('controller').get('newlink'))
      if(link){
        var newRepo = get(this, 'store').createRecord('repository', {link})
        newRepo.save()
      }
    }
  }
});
