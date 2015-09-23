'use strict';

/**
 * @ngdoc service
 * @name tareawebApp.proveedor
 * @description
 * # proveedor
 * Factory in the tareawebApp.
 */
angular.module('tareawebApp')
  .factory('Proveedor', ['$resource', function ($resource) {
    return $resource('http://localhost:8080/tareaweb2/rest/proveedores', {}, {
      query: {
        method: 'GET', params: {}, headers: {
          'Content-Type': 'application/json; charset=utf-8',
        }
      },
      save: {method: 'POST'}
    });
  }]);
