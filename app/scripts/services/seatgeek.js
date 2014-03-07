'use strict';

angular.module('sgmobileApp')
  .service('Seatgeek', function Seatgeek($resource) {
    var API_URL = 'http://api.seatgeek.com/2';
    this.Events = $resource(API_URL + '/events', {}, {
      'getEvents': {method: 'get', isArray: false, params: {'postal_code': 10003}}
    });
    this.Performers = $resource(API_URL + '/performers', {}, {
      'getPerformers': {method: 'get', isArray: false, params: {'postal_code': 10003}},
      'getPerformer': {method: 'get', isArray: false}
    });
    this.Venues = $resource(API_URL + '/venues', {}, {
      'getVenues': {method: 'get', isArray: false, params:{'postal_code': 10003}}
    });
    this.Autocomplete = $resource(API_URL + '/autocomplete?types[]=event&types[]=teamband&types[]=venue', {}, {
      'getSuggestions': {method: 'get', isArray: false}
    });
  });
