client.config(function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([

  $stateProvider
  //// STATE FOR LOGIN
    .state('home', {
      url: '/home',
      templateUrl: "/home.html",
      controller: 'HomeCtrl as homeCtrl'
    })

  // DEFAULT STATE
  $urlRouterProvider.otherwise('/home');
});