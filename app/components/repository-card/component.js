import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    imagePath(repo) {
      return 'assets/images/github.svg'
    }
  }
});
