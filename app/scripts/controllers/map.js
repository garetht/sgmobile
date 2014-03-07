'use strict';

var IS_BING_INTEGRATION = false;

angular.module('sgmobileApp')
  .controller('MapCtrl', function ($scope, $routeParams, Seatgeek) {
    $scope.hasMap = true;
    Seatgeek.Events.getSecureEvent({id: $routeParams.id}, function(data) {
      $scope.event = data.events[0];
      $scope.hasMap = !!data.events[0].map;
      if ($scope.hasMap)
        sgmap.map(document.getElementById('sg-map'), data.events[0].map.retina_id, {
          tileSize: 175,
          enableHighlights: false
        })
    })
    Seatgeek.Listings.getEventListings({id: $routeParams.id}, function(data) {
      $scope.hasListings = data.listings.length > 0;
      $scope.listingsData = data;
      console.log(data)
    })
  });
