this.restauranteur = angular.module('restauranteur', []);


this.restauranteur.config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.otherwise({
      templateUrl: '../templates/home.html',
      controller: 'HomeCtrl'
    });
  }
]);
