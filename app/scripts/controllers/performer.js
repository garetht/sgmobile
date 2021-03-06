'use strict';

angular.module('sgmobileApp')
  .controller('PerformerCtrl', function ($scope, $routeParams, Seatgeek) {
    Seatgeek.Performers.getPerformer({id: $routeParams.id}, function(data) {
      $scope.performer = data.performers[0];
    })
    Seatgeek.Events.getEvents({"performers.id": $routeParams.id}, function(data) {
      $scope.performerEvents = data.events;
    })
  });
