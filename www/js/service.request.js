angular.module('starter.service.request', ['ngResource'])

.factory('request', function ($resource, $http, db, $ionicLoading, device,$ionicPopup){

  return $resource = {


_sendSMS: function(telefone){

  // acessa local storage
  var id = db._get().ActionID;
  console.log(id);

  return $http({
    url: url + '/sendSMS/',
    method: 'POST',
    data: {telefone: telefone,
           actionId: id
          }
  }).then(function(resp) {
    console.log(resp.data);
      db._add($temp);
      return true;
  },
  function(response) {
    return console.error('_GetInfoLogin ERROR -> ', response);
  });
}}
})
