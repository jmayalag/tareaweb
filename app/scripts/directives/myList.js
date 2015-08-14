angular.module('tareawebApp').
  directive('myList', function() {
    return {
      restrict: 'E',
      scope: {
        options: '=',
        items: '='
      },
      templateUrl: 'views/directives/myList.html'
    };
  });
