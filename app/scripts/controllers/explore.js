'use strict';

angular.module('sgmobileApp')
  .controller('ExploreCtrl', function ($scope, Seatgeek, filterFilter) {
    Seatgeek.Events.getEvents({'per_page': 40}, function(data) {
      $scope.exploreEvents = filterFilter(data.events, function(el) {
        return !!(el.performers && el.performers[0].images.huge);
      }),
      $scope.page = "explore";
    });
  });
