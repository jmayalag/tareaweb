angular.module('tareawebApp')
  .factory('Venta', ['$resource', function ($resource) {
    //return $resource('https://pweb-demo-api.herokuapp.com/api/v1/ventas', {}, {
    //query: {method: 'GET', params: {}, headers: {'Authorization':'Bearer 096fa935862e4c55db73e8f153ef867f'}}
    return $resource('http://localhost:8080/tareaweb2/rest/ventas', {}, {
      query: {method: 'GET', params: {}, headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }}
    });
  }]);
