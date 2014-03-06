'use strict';

angular.module('sgmobileApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/explore.html',
        controller: 'ExploreController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
