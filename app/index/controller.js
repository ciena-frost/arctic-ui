import Ember from 'ember'

const {
  Controller,
  computed,
  get
} = Ember

export default Controller.extend({
  filteredModel: computed('model', 'repoFilter', 'ciena-frost', 'bp-frost', 'bp-ui-apps', 'ciena-blueplanet','otherOrg',function () {
    const model = get(this, 'model')
    var filter = get(this, 'repoFilter'),
        cienaFrostChecked = get(this, 'ciena-frost'),
        bpFrostChecked = get(this, 'bp-frost'),
        bpUiAppsChecked = get(this, 'bp-ui-apps'),
        cienaBpChecked = get(this, 'ciena-blueplanet'),
        otherChecked = get(this, 'otherOrg'),
        orgFilter = [],
        otherFilter = ['ciena-frost', 'BP_FROST', 'BP_UI_APPS', 'ciena-blueplanet']


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
        }else if(((otherChecked && !(otherFilter.indexOf(repo.data.organization) > -1)) || (!otherChecked && (orgFilter.length === 0 || !(orgFilter.indexOf(repo.data.organization) === -1)))) && repo[key].indexOf(filter) > -1){
          return true
        }else{
          return false
        }
      })
    })

  })
})
