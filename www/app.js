// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter', 'starter.service.db','starter.service.device','starter.service.request','starter.service.gerador','starter.service.promocao','ionic-datepicker','ngAutocomplete','ion-place-tools','ionic-modal-select'])

.run(function($ionicPlatform, $rootScope, $templateCache) {
  $rootScope.$on('$viewContentLoaded', function(){
    $templateCache.removeAll();
  });

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js


  $stateProvider
  // setup an abstract state for the tabs directive
  .state('app', {
    cache: false,
    url: "/app",
    abstract: true,
    templateUrl: "Menu/menu.html",
    controller: 'MenuCtrl'
  })

  .state('app.index', {
    cache: false,
    url: "/index",
    views: {
      'menuContent': {
        templateUrl: "Index/index.html",
        controller: 'IndexCtrl'
      }
    }
  })


  .state('app.promocao', {
    cache: true,
    url: "/promocao",
    views: {
      'menuContent': {
        templateUrl: "Promocao/promocao.html",
        controller: 'PromocaoCtrl'
      }
    }
  })

  .state('app.contrato', {
    cache: true,
    url: "/contrato",
    views: {
      'menuContent': {
        templateUrl: "Contrato/contrato.html",
        controller: 'ContratoCtrl'
      }
    }
  })

  .state('app.telefone', {
    cache: true,
    url: "/telefone",
    views: {
      'menuContent': {
        templateUrl: "Telefone/telefone.html",
        controller: 'TelefoneCtrl'
      }
    }
  })

  .state('app.agradecimento', {
    cache: true,
    url: "/agradecimento",
    views: {
      'menuContent': {
        templateUrl: "Agradecimento/agradecimento.html",
        controller: 'AgradecimentoCtrl'
      }
    }
  })

  .state('app.motivo', {
    cache: true,
    url: "/motivo",
    views: {
      'menuContent': {
        templateUrl: "Motivo/motivo.html",
        controller: 'MotivoCtrl'
      }
    }
  })


  // if none of the above states are matched, use this as the fallback
  // $urlRouterProvider.otherwise('/app/login?CPF=43330374XXX');
  $urlRouterProvider.otherwise('/app/index');
  //http://192.168.0.4:8100/#/app/login?CPF=43330374XXX&shortId=1&campaingId=56

});
