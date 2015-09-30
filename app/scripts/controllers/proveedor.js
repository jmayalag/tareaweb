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
      table: {id: 'ID', nombre: 'Nombre', ruc: 'RUC', email: 'Email'},
      modal: {
        title: 'nombre',
        body: {
          id: 'id',
          nombre: 'Nombre',
          ruc: 'RUC',
          tel: 'Telefono',
          email: 'Email'
        }
      },
      data: 'listado'
    };

    $scope.form_opts = {
      header: 'Proveedor',
      fields: {
        nombre: 'Nombre',
        ruc: 'RUC',
        tel: 'Telefono',
        email: 'Email'
      }
    };

    $scope.prov = new Proveedor();

    $scope.persist = function () {
      $scope.prov.save();
    };
  }]);
