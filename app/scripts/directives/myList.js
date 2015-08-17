angular.module('tareawebApp').
  directive('myList', function() {
    return {
      restrict: 'E',
      scope: {
        options: '=',
        factoryName : '@'
      },
      templateUrl: 'views/myList.html',
      link: function(scope,element){

        var factoryInstance = element.injector().get(scope.factoryName);
        scope.page = 0;
        scope.pages = 10;
        //scope.items =  factoryInstance.query({page:(scope.page)});
        scope.items =  factoryInstance.query({_start: '0',_limit:10});

        scope.doFilter = function(){
          scope.items = factoryInstance.query(scope.searchFields);
        }

        scope.cleanFilters = function(){
          scope.searchFields= {};
        }

        scope.searchFields= {};

        scope.changePage = function(newPage)
        {
          scope.page = newPage;
          scope.items = factoryInstance.query({_start: newPage*10,_limit:10});
        }

        scope.getPages = function() {
          return new Array(scope.pages);
        }

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
