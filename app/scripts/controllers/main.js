'use strict';

/**
 * @ngdoc function
 * @name tareawebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tareawebApp
 */
angular.module('tareawebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.people = [
      {id: 1, name: 'Jordan', age: 21},
      {id: 2, name: 'Alma', age: 21}
    ];
    $scope.opt = {id: 'ID', name: 'Nombre', age: 'Edad'};
  });
