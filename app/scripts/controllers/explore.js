'use strict';

angular.module('sgmobileApp')
  .controller('ExploreCtrl', function ($scope, $resource) {
    var Events = $resource('http://api.seatgeek.com/2/events', {'postal_code': 10003}, {
      'getEvents': {method: 'get', isArray: false}
    });
    Events.getEvents(function(data) {
      $scope.exploreEvents = data.events;
    });
  });
