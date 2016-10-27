import Ember from 'ember'

const {
  Controller,
  computed,
  get
} = Ember

export default Controller.extend({
  filteredModel: computed('model', 'repoFilter', 'ciena-frost', 'bp-frost', 'bp-ui-apps', 'ciena-blueplanet',function () {
    const model = get(this, 'model')
    var filter = get(this, 'repoFilter')
    var cienaFrostChecked = get(this, 'ciena-frost')
    var bpFrostChecked = get(this, 'bp-frost')
    var bpUiAppsChecked = get(this, 'bp-ui-apps')
    var cienaBpChecked = get(this, 'ciena-blueplanet')
    var orgFilter = []

    cienaFrostChecked ? orgFilter.addObject('ciena-frost') : orgFilter.removeObject('ciena-frost')
    bpFrostChecked ? orgFilter.addObject('BP_FROST') : orgFilter.removeObject('BP_FROST')
    bpUiAppsChecked ? orgFilter.addObject('BP_UI_APPS') : orgFilter.removeObject('BP_UI_APPS')
    cienaBpChecked ? orgFilter.addObject('ciena-blueplanet') : orgFilter.removeObject('ciena-blueplanet')

    if(!filter){
      filter = ''
    }
    return model.filter(repo => {
      return Object.keys(repo).some(key => {
        if (typeof repo[key] !== 'string'){
          return false
        }else if(repo.data.organization.indexOf(orgFilter) > -1 && repo[key].indexOf(filter) > -1){
          return true
        }
      })
    })

  })
})
