'use strict';

/**
 * @ngdoc directive
 * @name tareawebApp.directive:myForm
 * @description
 * # myForm
 */
angular.module('tareawebApp')
  .directive('myForm', function () {
    return {
      templateUrl: 'views/_myform.html',
      scope: {
        options: '=',
        factoryName: '@'
      },
      restrict: 'E',
      link: function (scope, element) {
        scope.obj = {};
      }
    };
  });
