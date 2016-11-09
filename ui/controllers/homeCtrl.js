angular
  .module('client')
  .controller('HomeCtrl', HomeController);

function HomeController($scope) {
  $scope.title = 'Calebs App';
}
