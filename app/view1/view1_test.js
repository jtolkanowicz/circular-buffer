'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should initialize circularBuffer array with length=size', inject(function($controller) {
      //spec body
      var scope = {}, view1Ctrl = $controller('View1Ctrl', {$scope:scope});
      expect(scope.circularBuffer.length==scope.size);
      expect(view1Ctrl).toBeDefined();
    }));

  });
});