angular.module('tareawebApp')
  .factory('User', ['$resource', function ($resource) {
//  return $resource('http://jsonplaceholder.typicode.com/:userId', {}, {
//    return $resource('http://localhost:3000/ventas?_start=:page&_limit=10', {}, {
    return $resource('http://localhost:3000/ventas', {}, {
    query: {method: 'GET', params: {}, isArray: true}
  });
}]);
