'use strict';

angular.module('sgmobileApp')
  .service('Seatgeek', function Seatgeek($resource) {
    this.Events = $resource('http://api.seatgeek.com/2/events', {'postal_code': 10003}, {
      'getEvents': {method: 'get', isArray: false, params: {'postal_code': 10003}}
    });
    this.Performers = $resource('http://api.seatgeek.com/2/performers', {'postal_code': 10003}, {
      'getPerformers': {method: 'get', isArray: false, params: {'postal_code': 10003}}
    });
    this.Venues = $resource('http://api.seatgeek.com/2/venues', {'postal_code': 10003}, {
      'getVenues': {method: 'get', isArray: false, params:{'postal_code': 10003}}
    });
  });
