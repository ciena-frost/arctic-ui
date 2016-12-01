import Ember from 'ember';

export function repoIcon(params/*, hash*/) {
  if(params[0] === 'ciena-frost'){
    return '/assets/images/ciena-frost.png'
  }else if (params[0] === 'ciena-blueplanet') {
    return '/assets/images/ciena-blueplanet.png'
  }else if (params[0] === 'BP_FROST') {
    return '/assets/images/bp_frost.png'
  }else if (params[0] === 'BP_UI_APPS') {
    return '/assets/images/bp_ui_apps.png'
  }else{
    return '/assets/images/github.svg'
  }
}

export default Ember.Helper.helper(repoIcon);
