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
        var sort = {field: 'id', desc: false};
        scope.page = 1;
        scope.searchFields = {page: 1};

        var getResponse = function () {
          var response = factoryInstance.query(scope.searchFields);
          response.$promise.then(function (data) {
            scope.pages = data.meta.total_pages;
            scope.items = data[scope.options.data];
          });
        };

        getResponse();

        scope.doFilter = function () {
          for (var k in scope.searchFields)
            if (!scope.searchFields[k]) delete scope.searchFields[k];

          scope.searchFields['page'] = 1;
          scope.page = 1;
          getResponse();
        };

        scope.sortColumn = function (field) {
          if (field != sort.field) {
            delete scope.searchFields[sort.field]; // eliminamos el orden anterior
            sort.field = field;
            sort.desc = false;
          } else {
            sort.desc = !sort.desc;
          }
          scope.searchFields[field] = sort.desc ? 'desc' : 'asc';
          scope.doFilter();
        }

        scope.sortOrder = function (field) {
          if (field == sort.field)
            return sort.desc ? 'glyphicon glyphicon-chevron-down' : 'glyphicon glyphicon-chevron-up';
          return 'glyphicon glyphicon-sort';
        };

        scope.cleanFilters = function () {
          scope.page = 1;
          scope.searchFields = {page: 1};
          getResponse();
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
          if (newPage == scope.page) return;
          scope.page = newPage;
          scope.searchFields['page'] = scope.page;
          getResponse();
        };

        scope.getPages = function () {
          return new Array(scope.pages);
        };

        scope.modal = {};
        scope.setDetail = function (user, opts) {
          scope.modal.title = user[opts.title];
          scope.modal.body = [];
          for (var data in opts.body) {
            scope.modal.body.push({label: opts.body[data], value: user[data]});
          }
          $('#myModal').modal('show');
        };
      }
    };
  });
