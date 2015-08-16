angular.module('tareawebApp')
  .factory('User', ['$resource', function ($resource) {
//  return $resource('http://jsonplaceholder.typicode.com/:userId', {}, {
    return $resource('http://localhost:3000/ventas?_start=:page&_limit=10', {}, {
    query: {method: 'GET', params: {page: '@page'}, isArray: true}
  });
}]);
