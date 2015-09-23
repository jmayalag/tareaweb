'use strict';

describe('Service: proveedor', function () {

  // load the service's module
  beforeEach(module('tareawebApp'));

  // instantiate service
  var proveedor;
  beforeEach(inject(function (_proveedor_) {
    proveedor = _proveedor_;
  }));

  it('should do something', function () {
    expect(!!proveedor).toBe(true);
  });

});
