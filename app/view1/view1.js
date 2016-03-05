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
      $scope.circularBuffer = new Array ($scope.size);

      $scope.add = function($value) {
        $scope.circularBuffer[$scope.end] = $value;
        $scope.end++;
      }

      $scope.remove = function() {
        var $value = $scope.circularBuffer[$scope.start];
        $scope.start++;
        //$scope.circularBuffer[$scope.start-1] = null;
        return $value;
      }

}]);