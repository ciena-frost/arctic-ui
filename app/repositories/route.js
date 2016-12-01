import Ember from 'ember';
import repository from '../models/repository';
import ENV from '../config/environment';

export default Ember.Route.extend({
  actions: {
    addProject: function(){
      var inputUrl = (this.get('controller').get('projectUrl'));
      //Store the data ar a projectlink model
      const projectObj = this.store.createRecord('repository', {
        link: inputUrl,
      });

      //Save the model to the database
      projectObj.save()
    },

  }
});
