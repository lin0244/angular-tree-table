'use strict';
angular.module('myApp.tree', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/demo1', {
            templateUrl: 'demo/demo1/demo1.tpl.html',
            controller: 'TableDemo1Ctrl',
            controllerAs: 'ctrl'
        });
    }])