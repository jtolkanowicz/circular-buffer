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
      $scope.position = 0; //get size function
      $scope.circularBuffer = new Array ($scope.size);

      $scope.add = function($value) {
        $scope.circularBuffer[$scope.position] = $value;
        $scope.position++;
      }

      $scope.remove = function() {
        var $value = $scope.circularBuffer[$scope.position-1];
        $scope.position--;
        $scope.circularBuffer[$scope.position-1] = null;
        return $value;
      }

}]);