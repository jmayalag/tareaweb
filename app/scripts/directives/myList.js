angular.module('tareawebApp').
  directive('myList', function() {
    return {
      restrict: 'E',
      scope: {
        options: '=',
        items: '='
      },
      templateUrl: 'views/myList.html',
      link: function(scope){
        scope.modal = {}
        scope.setDetail = function (user, opts) {
          scope.modal.title = user[opts.title];
          scope.modal.body = [];
          for (data in opts.body){
            console.log(data);
            scope.modal.body.push({label:data,value:user[data]});
          }
        };
      }
    };
  });
