'use strict';

angular.module('sgmobileApp')
  .controller('EventCtrl', function ($scope, $routeParams, Seatgeek) {
    Seatgeek.getPerformer({id: $routeParams.id}, function(data) {
      console.log(data.performers[0], "performer");
      $scope.performer = data.performers[0];
    })
    Seatgeek.Events.getEvents({"performers.id": $routeParams.id}, function(data) {
      console.log(data.events, "events");
      $scope.performerEvents = data.events;
    })
  });
