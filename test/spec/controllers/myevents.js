'use strict';

describe('Controller: MyeventsCtrl', function () {

  // load the controller's module
  beforeEach(module('sgmobileApp'));

  var MyeventsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyeventsCtrl = $controller('MyeventsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
