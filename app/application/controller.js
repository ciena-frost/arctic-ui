import Ember from 'ember';

const {
  Controller,
  computed,
  get
} = Ember

export default Ember.Controller.extend({
  model () {
    return get(this, 'store').findAll('repository');
  },
  bigSearch: true,
  searchTerm: '',
  reset: Ember.computed('repoFilter', function(){
     var temp = get(this,'repoFilter')
     if(temp === ''){
       this.set('bigSearch', true);
     }
   }),
  filteredModel: computed('model', 'repoFilter',function () {
    const model = get(this, 'model')
    var filter = get(this, 'repoFilter')

    if(!filter){
      filter = ''
    }

    return model.filter(repo => {
      return Object.keys(repo).some(key => {
        if (typeof repo[key] !== 'string'){
          return false
        }else if(repo[key].indexOf(filter) > -1){
          return true
        }else{
          return false
        }
      })
    })

  }),
  actions: {
    setSearch(){
      var temp = get(this,'repoFilter')
      this.set('bigSearch', false);
      this.set('searchTerm', temp)
    },
    smallSearch(){
      var self = this
      self.set('bigSearch', false)
      console.log(self.get("bigSearch"));
    },
    toggleSearch(){
      var self = this
      self.toggleProperty('bigSearch')
      console.log(self.get("bigSearch"));
    }
  }
});
