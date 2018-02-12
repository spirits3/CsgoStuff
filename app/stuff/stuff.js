'use strict';

angular.module('myApp.stuff', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/stuff', {
            templateUrl: 'stuff/stuff.html',
            controller: 'StuffCtrl'
        });
    }])
    .controller('StuffCtrl', [function() {

    }]);
