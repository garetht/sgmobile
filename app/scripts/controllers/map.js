'use strict';

var IS_BING_INTEGRATION = false;

angular.module('sgmobileApp')
  .controller('MapCtrl', function ($scope, $routeParams, Seatgeek, ListingFactory) {
    var listingMethods = {
      parse: function(resp) {
        resp.uniqueId = resp.m + "-" + resp.id;
        if (resp.mk) {
          resp.parsed_mk = sgmap.parseMapKey(resp.mk);
        }
        resp.sf = sgmap.prettySection(resp.s);
        resp.rf = sgmap.prettyRow(resp.r);
        // HACK: Sandcrab does not have dq, only aq
        if (resp.aq !== undefined && resp.aq !== null) {
          resp.dq = Math.round(resp.aq);
        }
        resp.bucket = sgmap.calculateDealScoreBucket(resp.dq);

        return resp;
      }
    }

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
    $scope.listings = ListingFactory.getListings();
    Seatgeek.Listings.getEventListings({id: $routeParams.id}, function(data) {
      $scope.hasListings = data.listings.length > 0;
      $scope.listingsData = data;
      $scope.listings = _.map(data.listings, listingMethods.parse);
    })


  });
