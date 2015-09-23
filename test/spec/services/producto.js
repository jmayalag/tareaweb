'use strict';

describe('Service: producto', function () {

  // load the service's module
  beforeEach(module('tareawebApp'));

  // instantiate service
  var producto;
  beforeEach(inject(function (_producto_) {
    producto = _producto_;
  }));

  it('should do something', function () {
    expect(!!producto).toBe(true);
  });

});
