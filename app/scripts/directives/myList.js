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
        scope.page = 1;
        scope.searchFields = {page: 1};
        scope.sort = {field: 'id', desc: false};

        scope.items = factoryInstance.query(scope.searchFields);

        scope.items.$promise.then(function(data) {
          scope.pages = data.meta.total_pages;
        });

        scope.doFilter = function () {
          for (var k in scope.searchFields)
            if (!scope.searchFields[k]) delete scope.searchFields[k];

          scope.searchFields['page'] = 1;
          scope.items = factoryInstance.query(scope.searchFields);
          scope.items.$promise.then(function(data) {
            scope.pages = data.meta.total_pages;
          });
        };

        scope.sortColumn = function (field) {
          delete scope.searchFields[scope.sort.field]; // eliminamos el orden anterior
          scope.sort.field = field;
          scope.sort.desc = !scope.sort.desc;
          scope.searchFields[field] = scope.sort.desc ? 'desc' : 'asc';
          scope.doFilter();
        }

        scope.cleanFilters = function () {
          scope.searchFields = {page: 1};
          scope.items = factoryInstance.query(scope.searchFields);
          scope.items.$promise.then(function(data) {
            scope.pages = data.meta.total_pages;
          });
        };

        scope.prevPage = function () {
          if (scope.page > 1)
            scope.changePage(scope.page - 1);
        };

        scope.nextPage = function () {
          if (scope.page < scope.pages)
            scope.changePage(scope.page + 1);
        };

        scope.changePage = function (newPage) {
          scope.page = newPage;
          scope.searchFields['page'] = scope.page;
          scope.items = factoryInstance.query(scope.searchFields);
          scope.items.$promise.then(function(data) {
            scope.pages = data.meta.total_pages;
          });
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
