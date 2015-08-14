angular.module('tareawebApp').
  factory('users', ['$http', function ($http) {
    return $http.get('http://jsonplaceholder.typicode.com/users').
      success(function (data) {
        return data;
      }).
      error(function (err) {
        return err;
      });
  }]);
