'use strict';

var IS_BING_INTEGRATION = false;

angular.module('sgmobileApp')
  .controller('MapCtrl', function ($scope, $routeParams, Seatgeek) {
    Seatgeek.Events.getSecureEvent({id: $routeParams.id}, function(data) {
      $scope.event = data.events[0];
      sgmap.map(document.getElementById('sg-map'), data.events[0].map.retina_id, {
        tileSize: 175,
        enableHighlights: false
      })
    })
    Seatgeek.Listings.getEventListings({id: $routeParams.id}, function(data) {
      $scope.listingsData = data;
    })
  });
