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
  addRepo: false,
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
      this.set('bigSearch', false)
      this.set('searchTerm', get(this, 'repoFilter'))
      console.log(self.get("bigSearch"));
    },
    biggerSearch(){
      var self = this
      this.set('bigSearch', true)
      this.set('repoFilter', '')
      this.set('searchTerm', '')
      console.log(self.get("repoFilter"));
    },
    toggleSearch(){
      var self = this
      self.toggleProperty('bigSearch')
      console.log(self.get("bigSearch"));
      console.log(this.currentRouteName);
    },
    addRepoDialog(){
      this.set('addRepo', true)
    },
    addNewRepo: function(){
      var link = (this.get('newlink'))
      console.log(link);
      if(link !== '' && link !== undefined){
        var newRepo = get(this, 'store').createRecord('repository', {link})
        newRepo.save()
      }
      this.set('addRepo', false)
      this.set('newlink', '')
    },
  }
});
