'use strict';

angular.module('sgmobileApp')
  .controller('MainCtrl', function ($scope, $route) {
    console.log($route.current, "route current")
  });
