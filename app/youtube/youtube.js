'use strict';

angular.module('myApp.youtube', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/youtube', {
            templateUrl: 'youtube/youtube.html',
            controller: 'YoutubeCtrl'
        });
    }])
    .controller('YoutubeCtrl', [function() {

    }]);
