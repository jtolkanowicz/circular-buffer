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
        expect(scope.circularBuffer.length).toBe(scope.size);
        expect(scope.end).toBe(0);
    });

    it('should add new value to end', function() {
        var end = scope.end;
        scope.add(5);
        expect(scope.end).toBe(end+1);
        expect(scope.circularBuffer[end].value).toBe(5);
    });

    it('should add new value from inputValue and reset inputValue', function() {
        var end = scope.end;
        scope.inputValue = 10;
        scope.addInputValue();
        expect(scope.end).toBe(end+1);
        expect(scope.circularBuffer[end].value).toBe(10);
        expect(scope.inputValue).toBe("");
    });

    it('should remove value from start, increment start', function() {
        scope.add(5);
        var start = scope.start;
        var temp = scope.remove();
        expect(scope.start).toBe(start+1);
        expect(temp).toBe(5);
        expect(scope.circularBuffer[start].value).toBe("");
    });

    it('should not change start and end if empty, returned value shoud be empty', function() {
        var start = scope.start;
        var end = scope.end;
        var temp = scope.remove();
        expect(scope.start).toBe(start);
        expect(scope.end).toBe(end);
        expect(temp).toBe("");
    });

    it('should go to beginning if end is reached', function() {
        var size = scope.size;
        for (var i = 0; i < size; i++) {
          scope.add(i);
        }
        expect(scope.end).toBe(0);
    });

    it('should overwrite if end is reached', function() {
        var size = scope.size+1;
        var start = scope.start;
        for (var i = 0; i < size; i++) {
          scope.add(i);
        }
        expect(scope.circularBuffer[start].value).toBe(size-1);
    });



/*    it('should add all values from array', function() {
        var values = [1,2,3,4,5,6,7];
        for (var i = 0; i < values.length; i++) {
            scope.add(values[i]);
        }
        //restart controller
        //var scopeState = scope;
        //scope = scope.$new();
        scope.addAll(values);
        expect(scope).toBe(scopeState);
    });*/


  });
});
