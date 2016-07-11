'use strict';

var app = angular.module('zing', ['zingControllers','ngRoute','ngAnimate','ui.bootstrap','duScroll']);

app.filter('capitalize', function() {
  return function(token) {
      return token.charAt(0).toUpperCase() + token.slice(1);
   }
});

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/skills', {
      templateUrl: 'skills.html',
      controller: 'SkillsCtrl'
    }).
    when('/home', {
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    }).
    when('/about', {
      templateUrl: 'about.html',
      controller: 'AboutCtrl'
    }).
    when('/contact', {
      templateUrl: 'contact.html',
      controller: 'ContactCtrl'
    }).
    when('/works', {
      templateUrl: 'works.html',
      controller: 'WorksCtrl'
    }).
    when('/works/1', {
      templateUrl: 'work1.html',
      controller: 'Work1Ctrl'
    }).
    when('/works/2', {
      templateUrl: 'work2.html',
      controller: 'Work2Ctrl'
    }).
    when('/works/3', {
      templateUrl: 'work3.html',
      controller: 'Work3Ctrl'
    }).
    when('/works/4', {
      templateUrl: 'work4.html',
      controller: 'Work4Ctrl'
    }).
    when('/works/5', {
      templateUrl: 'work5.html',
      controller: 'Work5Ctrl'
    }).
    when('/works/6', {
      templateUrl: 'work6.html',
      controller: 'Work6Ctrl'
    }).
    when('/works/7', {
      templateUrl: 'work7.html',
      controller: 'Work7Ctrl'
    }).
    when('/works/8', {
      templateUrl: 'work8.html',
      controller: 'Work8Ctrl'
    }).
    when('/works/9', {
      templateUrl: 'work9.html',
      controller: 'Work9Ctrl'
    }).
    when('/works/10', {
      templateUrl: 'work10.html',
      controller: 'Work10Ctrl'
    }).
    when('/works/11', {
      templateUrl: 'work11.html',
      controller: 'Work11Ctrl'
    }).
    when('/works/12', {
      templateUrl: 'work12.html',
      controller: 'Work12Ctrl'
    }).
    when('/works/13', {
      templateUrl: 'work13.html',
      controller: 'Work13Ctrl'
    }).
    when('/works/14', {
      templateUrl: 'work14.html',
      controller: 'Work14Ctrl'
    }).
    when('/works/15', {
      templateUrl: 'work15.html',
      controller: 'Work15Ctrl'
    }).
    when('/works/16', {
      templateUrl: 'work16.html',
      controller: 'Work16Ctrl'
    }).
    otherwise({
      redirectTo: '/home'
    });
}]);