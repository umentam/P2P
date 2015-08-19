var app = angular.module("P2PApp", []);

app.config(function ($routeProvider) {
    'use strict';
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/signup', {
            templateUrl: 'views/signup.html'
        })
        .when('/login', {
            templateUrl: 'views/login.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});