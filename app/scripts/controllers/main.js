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

    $scope.opts = {
      table: {numero: 'Numero', nombre_cliente: 'Nombre', monto_total: 'Monto Total'},
      modal: {
        title: 'nombre_cliente',
        body: {numero: 'Numero', nombre_cliente: 'Nombre', monto_total: 'Monto Total', fecha: 'Fecha', ruc_cliente: 'Ruc'}
      }
    };

  }]);
