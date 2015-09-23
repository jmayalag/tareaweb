'use strict';

/**
 * @ngdoc function
 * @name tareawebApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the tareawebApp
 */
angular.module('tareawebApp')
  .controller('NavigationCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  }]);
