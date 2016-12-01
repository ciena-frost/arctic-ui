import Ember from 'ember';
import RSVP from 'rsvp';
const {
  Route,
  get
} = Ember

export default Route.extend({
  model (params) {
    let repository = get(this, 'store').find('repository', params.id)
    let isdependency= get(this,'store').find('isdependency', params.id)
    return RSVP.hash({
      repository: repository,
      isdependency: isdependency,
    })
  },

})
