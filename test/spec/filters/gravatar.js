'use strict';

describe('Filter: gravatar', function () {

  // load the filter's module
  beforeEach(module('fieldDBActivityFeedApp'));

  // initialize a new instance of the filter before each test
  var gravatar;
  beforeEach(inject(function ($filter) {
    gravatar = $filter('gravatar');
  }));

  it('should return the input without a complete url to gravatar.com"', function () {
    var text = 'https://secure.gravatar.com/avatar/turnmeintoagravatarlink';
    expect(gravatar(text)).toBe('turnmeintoagravatarlink');
  });

  it('should return a default gravatar if missing a gravatar', function () {
    var text = '';
    expect(gravatar(text)).toBe('user_gravatar.png');
  });
});
