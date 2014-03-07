'use strict';

angular.module('sgmobileApp')
  .factory('ListingFactory', function (Seatgeek) {
    var ListingService = {};
    var listings = [];

    // Public API here
    return {
      setListings: function(l) {
        listings = l;
      },
      getListings: function() {
        return listings;
      }
    };
  });
