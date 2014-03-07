'use strict';

describe('Service: Listing', function () {

  // load the service's module
  beforeEach(module('sgmobileApp'));

  // instantiate service
  var Listing;
  beforeEach(inject(function (_Listing_) {
    Listing = _Listing_;
  }));

  it('should do something', function () {
    expect(!!Listing).toBe(true);
  });

});
