'use strict';

angular.module('sgmobileApp')
  .controller('ExploreCtrl', function ($scope, Seatgeek) {
    Seatgeek.Events.getEvents(function(data) {
      $scope.exploreEvents = data.events;
    });
  });
