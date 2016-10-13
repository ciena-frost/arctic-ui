import Ember from 'ember'

const {
  Controller,
  computed,
  get
} = Ember

export default Controller.extend({
  filteredModel: computed('model', 'repoFilter', function () {
    const model = get(this, 'model')
    const filter = get(this, 'repoFilter')

    if (!filter) {
      return model
    }

    return model.filter(repo => {
      return Object.keys(repo).some(key => {
        if (typeof repo[key] !== 'string')
          return false
        return repo[key].indexOf(filter) > -1
      })
    })

  })
})
