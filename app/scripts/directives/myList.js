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
        scope.loading = true;
        scope.page = 1;
        scope.searchFields = {};
        scope.queryParams = {page: 1};

        var pageRestart = function () {
          scope.page = 1;
        }

        var getResponse = function () {
          scope.queryParams['page'] = scope.page;
          scope.loading = true;
          var response = factoryInstance.query(scope.queryParams);
          response.$promise.then(function (data) {
            scope.loading = false;
            scope.pages = data.meta.total_pages;
            scope.items = data[scope.options.data];
          }, function () {
            alert("No se pudo obtener datos del servidor.");
          });
        };

        getResponse();

        scope.doFilter = function () {
          for (var k in scope.searchFields)
            if (!scope.searchFields[k]) delete scope.queryParams[k];
            else scope.queryParams[k] = scope.searchFields[k];

          pageRestart();
          getResponse();
        };

        scope.sortColumn = function (field) {
          if (field != sort.field) {
            delete scope.queryParams[sort.field]; // eliminamos el orden anterior
            sort.field = field;
            sort.desc = false;
          } else {
            sort.desc = !sort.desc;
          }
          scope.queryParams[field] = sort.desc ? 'desc' : 'asc';
          pageRestart();
          getResponse();
        };

        scope.sortIcon = function (field) {
          if (field == sort.field)
            return sort.desc ? 'glyphicon glyphicon-chevron-down' : 'glyphicon glyphicon-chevron-up';
          return 'glyphicon glyphicon-sort';
        };

        scope.cleanFilters = function () {
          sort = {field: 'id', desc: false};
          scope.searchFields = {};
          scope.queryParams = {};
          pageRestart();
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
