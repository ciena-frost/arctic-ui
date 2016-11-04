import Ember from 'ember'

const {
  Controller,
  computed,
  get
} = Ember

export default Controller.extend({
  basicTabsContent:  [ {id: 'dependencies', title: 'Dependencies'},
                       {id: 'details', title: 'Details'},
                       {id: 'usedby', title: 'Using Me'} ],
  basicTabsSelection: "details",

  dependenciesFilteredModel: computed('model', 'dependenciesFilter', 'basicTabsSelection', function () {
    const model = get(this, 'model.repository.versions.lastObject.dependencies')
    var theFilter = get(this, 'dependenciesFilter')
    console.log(model);
    if(!theFilter){
      theFilter = ''
    }else{
      theFilter = theFilter.toLowerCase()
    }
    return model.filter(repo => {
      return Object.keys(repo).some(key => {
        if (typeof repo[key] !== 'string'){
          return false
        }else if(repo[key].toLowerCase().indexOf(theFilter) > -1 || theFilter === ''){
          return true
        }else{
          return false
        }
      })
    })
  }),
  devDependenciesFilteredModel: computed('model', 'dependenciesFilter',  'basicTabsSelection', function () {
    const model = get(this, 'model.repository.versions.lastObject.devdependencies')
    var theFilter = get(this, 'dependenciesFilter')

    if(!theFilter){
      theFilter = ''
    }else{
      theFilter = theFilter.toLowerCase()
    }

    return model.filter(repo => {
      return Object.keys(repo).some(key => {
        if (typeof repo[key] !== 'string'){
          return false
        }else if(repo[key].toLowerCase().indexOf(theFilter) > -1 || theFilter === ''){
          return true
        }else{
          return false
        }
      })
    })
  }),
  isDepFilteredModel: computed('model', 'depFilter',function () {
    const model = get(this, 'model.isdependency.isdependencies')
    var theFilter = get(this, 'depFilter')

    if(!theFilter){
     theFilter = ''
    }else{
      theFilter = theFilter.toLowerCase()
    }

    return model.filter(repo => {
      return Object.keys(repo).some(key => {
        if (typeof repo[key] !== 'string'){
          return false
        }else if(repo[key].toLowerCase().indexOf(theFilter) > -1 || repo.data.organization.toLowerCase().indexOf(theFilter) > -1){
          return true
        }else{
          return false
        }
      })
    })

  })
})
