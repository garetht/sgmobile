'use strict';

describe('Controller: PerformerCtrl', function () {

  // load the controller's module
  beforeEach(module('sgmobileApp'));

  var PerformerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PerformerCtrl = $controller('PerformerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
