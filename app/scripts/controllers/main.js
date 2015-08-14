'use strict';

/**
 * @ngdoc function
 * @name tareawebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tareawebApp
 */
angular.module('tareawebApp')
  .controller('MainCtrl', ['$scope', 'User', function ($scope, User) {
    $scope.people = [
      {id: 1, name: 'Jordan', age: 21},
      {id: 2, name: 'Alma', age: 21}
    ];
    $scope.opt = {id: 'ID', name: 'Nombre', age: 'Edad'};
    $scope.users = User.query();
    $scope.opts = {id: 'ID', name: 'Nombre', email: 'Email'};
  }]);
