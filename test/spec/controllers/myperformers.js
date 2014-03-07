'use strict';

describe('Controller: MyperformersCtrl', function () {

  // load the controller's module
  beforeEach(module('sgmobileApp'));

  var MyperformersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyperformersCtrl = $controller('MyperformersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
