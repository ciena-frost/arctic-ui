import Ember from 'ember';
import RSVP from 'rsvp';
const {
  Route,
  get
} = Ember

export default Route.extend({
  model (params) {
    //var repository = get(this, 'store').find('repository', params.id)
    //var isdependency= get(this,'store').find('isdependency', params.id)

    return RSVP.hash({
      repository: this.store.find('repository', params.id),
      isdependency:this.store.find('isdependency', params.id)
      })
  },

})
