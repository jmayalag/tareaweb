angular.module('tareawebApp').
  directive('myList', function() {
    return {
      restrict: 'E',
      scope: {
        options: '=',
        items: '=',
        pag: '&'
      },
      templateUrl: 'views/myList.html',
      link: function(scope,modal){
        scope.modal = {}
        scope.setDetail = function (user, opts) {
          scope.modal.title = user[opts.title];
          scope.modal.body = [];
          for (data in opts.body){
            scope.modal.body.push({label:opts.body[data],value:user[data]});
          }
          $('#myModal').modal('show');
        };
      }
    };
  });
