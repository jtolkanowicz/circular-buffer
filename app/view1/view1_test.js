'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    var scope;

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('View1Ctrl', {$scope: scope});
    }));

    it('should initialize circularBuffer array with length=size and position 0', function() {
      expect(scope.circularBuffer.length==scope.size);
      expect(scope.position==0);
    });

    it('should add new value to current position', function() {
        var currentPosition = scope.position;
        scope.add(5);
        expect(scope.position==currentPosition+1);
        expect(scope.circularBuffer[currentPosition]==5);
    });

    it('should remove value from current position', function() {
        scope.add(5);
        var currentPosition = scope.position;
        var temp = scope.remove();
        expect(scope.position==currentPosition-1);
        expect(scope.remove()==5);
    });

  });
});