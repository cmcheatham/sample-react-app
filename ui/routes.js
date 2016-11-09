//Angular 1 Routes
// customers.routes.js
angular
  .module('client')
  .run(appRun);

/* @ngInject */
function appRun(routerHelper) {
  routerHelper.configureStates(getStates());
}

function getStates() {
  return [
    {
      state: 'home',
      config: {
        abstract: true,
        template: 'home.html',
        url: '/home',
        controller: 'HomeCtrl'
      }
    }
  ];
}
