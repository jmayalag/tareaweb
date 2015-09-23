'use strict';

/**
 * @ngdoc service
 * @name tareawebApp.producto
 * @description
 * # producto
 * Factory in the tareawebApp.
 */
angular.module('tareawebApp')
  .factory('Producto', ['$resource', function ($resource) {
    return $resource('http://localhost:8080/tareaweb2/rest/productos', {}, {
      query: {
        method: 'GET', params: {}, headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      }
    });
  }]);

