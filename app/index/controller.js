import Ember from 'ember';
const {
  Controller,
  computed,
  observer,
  get,
  set,
  A: EmberArray
} = Ember

export default Controller.extend({
  errorList: EmberArray(),
  observeNewRepo: observer('newRepo', function () {
    if (get(this, 'newRepo').indexOf('http://') < 0)
      set(this, 'errorList', EmberArray(['Invalid URL']))
    else
      set(this, 'errorList', null)
  })
})
