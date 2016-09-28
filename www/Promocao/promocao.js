angular.module('starter')

.controller('PromocaoCtrl', function($scope, $ionicHistory, $state, $ionicPlatform, servicePromocao) {

  $scope.promocao = servicePromocao.getPromoEscolhida();

  $scope.contratar = function() {
    //direciona para outra pagina
    $state.go('app.contrato', {}, { location: 'replace', cache: false });
  };

});
