'use strict';

/**
 * @ngdoc function
 * @name tareawebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tareawebApp
 */
angular.module('tareawebApp')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    $scope.team = [
      {name: 'Jordan Ayala', email: 'jayala1993@outlook.com'},
      {name: 'Daniel Ughelli', email: 'viktor92@gmail.com'},
      {name: 'Santiago Ortiz', email: 'sanmiorto@gmail.com'}
    ];
  }]);
