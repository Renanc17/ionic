angular.module('starter.service.gerador', ['ngResource'])


.factory('gerador', function ($resource) {
  return $resource = {
    _data: function (dias) {

      var somar = (dias*24) * 60 * 60 * 1000

      var today = new Date(new Date().getTime() + somar);
      var dd = today.getDate()
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();

      if(dd<10) {
        dd='0'+dd
      }

      if(mm<10) {
        mm='0'+mm
      }

      return today = dd+'/'+mm+'/'+yyyy;
    }
  }
});
