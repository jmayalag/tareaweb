'use strict';

/**
 * @ngdoc function
 * @name tareawebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tareawebApp
 */
angular.module('tareawebApp')
  .controller('MainCtrl', ['$scope', 'users', function ($scope, users) {
    $scope.people = [
      {id: 1, name: 'Jordan', age: 21},
      {id: 2, name: 'Alma', age: 21}
    ];
    $scope.opt = {id: 'ID', name: 'Nombre', age: 'Edad'};
    users.success(function (data) {
      $scope.users = data;
    });
    $scope.opts = {id: 'ID', name: 'Nombre', email: 'Email'}
    ''
  }]);
