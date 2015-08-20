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
      {name: 'Jordan Ayala', email: 'jayala1993@outlook.com', photo: 'images/jordan.jpg'},
      {name: 'Daniel Ughelli', email: 'viktor992@hotmail.com', photo: 'images/dani.jpg'},
      {name: 'Santiago Ortiz', email: 'sanmiorto@gmail.com', photo: 'images/santi.jpg'}
    ];
  }]);
