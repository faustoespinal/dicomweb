'use strict';

describe('Controller: DicomattribCtrl', function () {

  // load the controller's module
  beforeEach(module('dicomdocsApp'));

  var DicomattribCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DicomattribCtrl = $controller('DicomattribCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
