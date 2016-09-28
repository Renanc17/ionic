angular.module('starter.service.db', ['ngResource'])

.factory('db', function ($resource) {
  return $resource = {
    _add: function(obj) {
      localStorage.setItem('wssacapp', JSON.stringify(obj));
    },

    _get: function() {
      return JSON.parse(localStorage.getItem('wssacapp'));
    }
  }
});
