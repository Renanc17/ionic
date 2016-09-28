angular.module('starter')

.controller('MotivoCtrl', function($scope, $ionicHistory, $state, $ionicPlatform, servicePromocao, $ionicPopup) {

  $scope.finalizar = function(){
    $state.go('app.agradecimento', {}, { location: 'replace', cache: false });
  }

});
