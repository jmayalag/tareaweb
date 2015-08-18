angular.module('tareawebApp').
  directive('myList', function () {
    return {
      restrict: 'E',
      scope: {
        options: '=',
        factoryName: '@'
      },
      templateUrl: 'views/myList.html',
      link: function (scope, element) {

        var factoryInstance = element.injector().get(scope.factoryName);
        scope.page = 0;
        scope.pages = 10;
        //scope.items =  factoryInstance.query({page:(scope.page)});
        scope.searchFields = {_start: 0, _limit: 10};
        scope.items = factoryInstance.query(scope.searchFields);

        scope.doFilter = function () {
          for (var k in scope.searchFields)
            if (!scope.searchFields[k]) delete scope.searchFields[k];

          scope.searchFields['_start'] = 0;
          scope.items = factoryInstance.query(scope.searchFields);
        };

        scope.cleanFilters = function () {
          scope.searchFields = {_start: 0, _limit: 10};
          scope.items = factoryInstance.query(scope.searchFields);
        };

        scope.changePage = function (newPage) {
          scope.page = newPage;
          scope.searchFields['_start'] = scope.page * 10;
          scope.items = factoryInstance.query(scope.searchFields);
        };

        scope.getPages = function () {
          return new Array(scope.pages);
        };

        scope.modal = {};
        scope.setDetail = function (user, opts) {
          scope.modal.title = user[opts.title];
          scope.modal.body = [];
          for (data in opts.body) {
            scope.modal.body.push({label: opts.body[data], value: user[data]});
          }
          $('#myModal').modal('show');
        };
      }
    };
  });
