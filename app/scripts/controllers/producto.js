'use strict';

/**
 * @ngdoc function
 * @name tareawebApp.controller:ProductoCtrl
 * @description
 * # ProductoCtrl
 * Controller of the tareawebApp
 */
angular.module('tareawebApp')
  .controller('ProductoCtrl', ['$scope', 'Producto', function ($scope, Producto) {
    $scope.opts = {
      table: {id: 'ID', nombre: 'Nombre', cantidad: 'Cantidad', precio_unitario: 'Precio Unitario'},
      modal: {
        title: 'nombre',
        body: {
          id: 'id',
          nombre: 'Nombre del Producto',
          cantidad: 'Cantidad Disponible',
          precio_unitario: 'Precio Unitario'
        }
      },
      data: 'listado'
    };
  }]);
