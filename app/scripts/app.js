'use strict';

angular.module('sgmobileApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/explore.html',
        controller: 'ExploreCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/myevents', {
        templateUrl: 'views/myevents.html',
        controller: 'MyeventsCtrl'
      })
      .when('/myperformers', {
        templateUrl: 'views/myperformers.html',
        controller: 'MyperformersCtrl'
      })      
      .when('/performer/:id', {
        templateUrl: 'views/performer.html',
        controller: 'PerformerCtrl'
      })
      .when('/event/:id', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
