angular.module('starter')

.controller('TelefoneCtrl', function($scope, $ionicHistory, $state, $ionicPlatform, servicePromocao, $ionicPopup) {

  $scope.confirmar = function(){
    $state.go('app.agradecimento', {}, { location: 'replace', cache: false });
  }

});
