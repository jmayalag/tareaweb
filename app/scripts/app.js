'use strict';

/**
 * @ngdoc overview
 * @name tareawebApp
 * @description
 * # tareawebApp
 *
 * Main module of the application.
 */
angular
  .module('tareawebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/proveedores', {
        templateUrl: 'views/proveedor.html',
        controller: 'ProveedorCtrl',
        controllerAs: 'proveedor'
      })
      .when('/productos', {
        templateUrl: 'views/producto.html',
        controller: 'ProductoCtrl',
        controllerAs: 'producto'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
