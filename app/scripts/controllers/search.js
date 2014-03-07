'use strict';

angular.module('sgmobileApp')
  .controller('SearchCtrl', function ($scope, Seatgeek) {
    Seatgeek.Autocomplete.getSuggestions({q: 'hello'}, function(data) {
      $scope.searchResults = data;
    });
  });
