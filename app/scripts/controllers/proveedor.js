'use strict';

/**
 * @ngdoc function
 * @name tareawebApp.controller:ProveedorCtrl
 * @description
 * # ProveedorCtrl
 * Controller of the tareawebApp
 */
angular.module('tareawebApp')
  .controller('ProveedorCtrl', ['$scope', 'Proveedor', function ($scope, Proveedor) {
    $scope.opts = {
      table: {id: 'ID', nombre: 'Nombre', apellido: 'Apellido', cedula: 'Cedula'},
      modal: {
        title: 'nombre',
        body: {
          id: 'id',
          nombre: 'Nombre',
          apellido: 'Apellido',
          cedula: 'Cedula de Identidad'
        }
      },
      data: 'ventas'
    };
  }]);
