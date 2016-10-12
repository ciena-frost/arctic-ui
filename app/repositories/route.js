import Ember from 'ember';

const {
  Route
} = Ember

export default Route.extend({
  model: function() {
    var repositories = this.store.findAll('repository')
	},

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
