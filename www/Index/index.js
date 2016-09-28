angular.module('starter')

.controller('IndexCtrl', function($scope, $ionicHistory, $state, $ionicPlatform, servicePromocao) {

  $scope.goDetails = function(id) {
    if(servicePromocao.promocaoEscolhida(id)){
      //direciona para outra pagina
      $state.go('app.promocao', {}, { location: 'replace', cache: false });
    }
  };

  $scope.motivo = function(){
    $state.go('app.motivo', {}, { location: 'replace', cache: false });
  }

});
