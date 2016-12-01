import Ember from 'ember';

const {
  Controller,
  computed,
  get
} = Ember

export default Ember.Controller.extend({
  addRepo: computed('newlink', function() {
  })
});
