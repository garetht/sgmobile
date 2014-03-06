'use strict';

describe('Service: Seatgeek', function () {

  // load the service's module
  beforeEach(module('sgmobileApp'));

  // instantiate service
  var Seatgeek;
  beforeEach(inject(function (_Seatgeek_) {
    Seatgeek = _Seatgeek_;
  }));

  it('should do something', function () {
    expect(!!Seatgeek).toBe(true);
  });

});
