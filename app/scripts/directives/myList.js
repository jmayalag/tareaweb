angular.module('tareawebApp').
  directive('myList', function() {
    return {
      restrict: 'E',
      scope: {
        setDetail: '=',
        modal: '=',
        options: '=',
        items: '='
      },
      templateUrl: 'views/myList.html'
    };
  });
