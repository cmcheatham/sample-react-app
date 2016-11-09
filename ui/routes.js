// route-config.js
angular
  .module('client')
  .config(config);

function config($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
  $stateProvider
  // STATE FOR LOGIN
    .state('home', {
      url: '/home',
      templateUrl: "/home.html",
      controller: 'HomeCtrl as homeCtrl'
    })
  $urlRouterProvider.otherwise('/home');

}

