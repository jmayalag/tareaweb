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
    $scope.opts = {
      table: {id: 'ID', name: 'Nombre', email: 'Email'},
      modal: {
        title: 'name',
        body: {id: 'ID', name: 'Nombre', phone: 'Tel.', website: 'Pagina'}
      }
    };
    $scope.modal = {}

    $scope.setDetail = function (user, opts) {
      $scope.modal.title = user[opts.title];
      $scope.modal.body = user;
    };
  }]);
