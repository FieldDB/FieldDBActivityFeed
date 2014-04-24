'use strict';

describe('Directive: fielddbActivityHeatmap', function () {

  // load the directive's module
  beforeEach(module('fielddbActivityFeedApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fielddb-activity-heatmap></fielddb-activity-heatmap>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fielddbActivityHeatmap directive');
  }));
});
