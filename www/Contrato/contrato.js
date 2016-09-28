angular.module('starter')

.controller('ContratoCtrl', function($scope, $ionicHistory, $state, $ionicPlatform, servicePromocao, $ionicPopup) {

  $scope.goPhone = function(){
    $state.go('app.telefone', {}, { location: 'replace', cache: false });
  }

  $scope.goChat = function() {
    $ionicPopup.alert({
     title: 'Aviso',
     template: 'Função Chat ainda não disponível.'
   });
  };

});
