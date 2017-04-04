/*global angular, $*/
var app = angular.module('myApp', ['ngRoute']);

// configure routes
app.config(function ($routeProvider) {
    "use strict";
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/home.html'
        }).when('/home', {
            templateUrl: 'app/views/home.html'
        }).when('/resume', {
            templateUrl: 'app/views/resume.html'
        }).when('/reel', {
            templateUrl: 'app/views/reel.html'
        }).when('/gallery', {
            templateUrl: 'app/views/gallery.html'
        }).when('/contact', {
            templateUrl: 'app/views/contact.html'
        }).otherwise({ redirectTo: '/' });
});

// testing variable to get access to angular scope
// var test = angular.element($('#navbar')).scope();
app.controller('HomeController', ['$scope', '$location', '$log', function ($scope, $location, $log) {
    'use strict';
    
    //get the date for the bottom corner
    $scope.imgURL = "assets/img/";
    
    // set a tab as the active tab
    $scope.getClass = function (path) {
        if ($location.path() === path) {
            return 'active';
        } else { return ''; }
    };
    
    $scope.date = new Date();
    
    // close the navigation
    $scope.closeNav = function () { $("#navbar").collapse('hide'); };
}]);