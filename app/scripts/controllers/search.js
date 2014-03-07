'use strict';

angular.module('sgmobileApp')
  .controller('SearchCtrl', function ($scope, Seatgeek) {
    $scope.getSuggestions = function() {
      if ($scope.searchText && $scope.searchText.length > 2)
        Seatgeek.Autocomplete.getSuggestions({q: $scope.searchText}, function(data) {
          $scope.searchResults = data;
        });
    }
  });
