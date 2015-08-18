angular.module('tareawebApp')
  .factory('User', ['$resource', function ($resource) {
//  return $resource('http://jsonplaceholder.typicode.com/:userId', {}, {
//    return $resource('http://localhost:3000/ventas?_start=:page&_limit=10', {},
    //return $resource('http://localhost:3000/ventas', {}, {
    return $resource('https://pweb-demo-api.herokuapp.com/api/v1/ventas', {}, {
    query: {method: 'GET', params: {}, headers: {'Authorization':'Bearer 096fa935862e4c55db73e8f153ef867f'}}
  });
}]);
