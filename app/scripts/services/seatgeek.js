'use strict';

angular.module('sgmobileApp')
  .service('Seatgeek', function Seatgeek($resource) {
    this.Events = $resource('http://api.seatgeek.com/2/events', {'postal_code': 10003}, {
      'getEvents': {method: 'get', isArray: false}
    });
    this.Performers = $resource('http://api.seatgeek.com/2/performers', {'postal_code': 10003}, {
      'getPerformers': {method: 'get', isArray: false}
    });
  });
