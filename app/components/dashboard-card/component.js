import Ember from 'ember';

export default Ember.Component.extend({
  ltsVersion: Ember.computed('repo', function(){
    var ltsVersion = this.get('repo.versions.lastObject')
    return ltsVersion
  })
});
