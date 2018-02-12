'use strict';

angular.module('myApp.strategy', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/strategy', {
            templateUrl: 'strategy/strategy.html',
            controller: 'StrategyCtrl'
        });
    }])
    .controller('StrategyCtrl', [function() {

    }]);
