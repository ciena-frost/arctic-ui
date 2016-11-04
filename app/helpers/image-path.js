import Ember from 'ember';

export function imagePath(params/*, hash*/) {
  if(params[0].indexOf('bitbucket') > -1){
    return '/assets/images/bitbucket.png'
  }else {
    return '/assets/images/github.svg'
  }
}

export default Ember.Helper.helper(imagePath);
