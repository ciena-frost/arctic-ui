define('artic-demo/projectlink/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    link: _emberData['default'].attr('string')
  });
});