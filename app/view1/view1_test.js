'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    var scope;

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('View1Ctrl', {$scope: scope});
    }));

    it('should initialize circularBuffer array with length=size', function() {
      expect(scope.circularBuffer.length==scope.size);
    });

  });
});