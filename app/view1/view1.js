'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
      $scope.size = 7; //get size function
      $scope.start = 0;
      $scope.end = 0;
      $scope.inputValue = "";

      $scope.circularBuffer = [];
      for (var i = 0; i < $scope.size; i++) {
          $scope.circularBuffer.push({value : ""});
      }

      $scope.add = function($value) {
        $scope.circularBuffer[$scope.end] = {value : $value};
        $scope.end = ($scope.end+1)%$scope.size;
        if($scope.end==$scope.start){
          $scope.start++;
        }
      }

      $scope.addInputValue = function(){
        $scope.add($scope.inputValue);
        $scope.inputValue = "";
      }

      $scope.remove = function() {
        var $cell = $scope.circularBuffer[$scope.start];
        $scope.circularBuffer[$scope.start] = {value : ""};
        if($scope.start != $scope.end) {
            $scope.start++;
        }
        return $cell.value;
      }


}]);
