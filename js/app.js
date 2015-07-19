'use strict';
var app = angular.module("P2pApp", [])
    .controller('IndexController', ['$scope', '$location', function ($scope, $location) {
        $scope.userInfo = [
            {
                name: 'name',
                properName: 'Name',
                input: ''
            },
            {
                name: 'email',
                properName: 'Email',
                isUnique: false,
                input: ''
            },
            {
                name: 'password',
                properName: 'Password',
                isConfirmed: false, 
                input: ''
            },
            {
                name: 'location',
                properName: 'Location',
                isConfirmed: false,
                input: ''
            }];

        $scope.homeButtons = {
            login: "Login",
            signup: "Sign Up"
        };
        $scope.changeUrl = function (path) {
            $location.path(path);
        };
    }]);

app.config(function ($routeProvider) {
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