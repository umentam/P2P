app.controller('IndexController', ['$scope', '$location', function ($scope, $location) {
    'use strict';
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

    $scope.loginInfo = [
        {
            name: 'userName',
            properName: 'User Name',
            input: ''
        },
        {
            name: 'password',
            properName: 'Password',
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