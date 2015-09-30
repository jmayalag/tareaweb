'use strict';

describe('Directive: myForm', function () {

  // load the directive's module
  beforeEach(module('tareawebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-form></my-form>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myForm directive');
  }));
});
