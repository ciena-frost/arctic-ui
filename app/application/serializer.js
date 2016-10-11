import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  primaryKey: '_id',
  serializeId: function(id) {
      return id.toString();
  },

  // extractRelationships (modelClass, resourceHash) {
  //   debugger
  //   this._super(modelClass, resourceHash)
  // },

});
