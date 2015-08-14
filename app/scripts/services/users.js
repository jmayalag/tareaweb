angular.module('tareawebApp')
  .factory('User', ['$resource', function ($resource) {
  return $resource('http://jsonplaceholder.typicode.com/:userId', {}, {
    query: {method: 'GET', params: {userId: 'users'}, isArray: true}
  });
}]);
