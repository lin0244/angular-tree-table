'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.tree',
  'myApp.demo1'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/demo1'});
}]);
